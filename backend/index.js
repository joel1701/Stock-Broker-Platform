
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const UserModel = require("./models/UserModel");
const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

// Middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:3000"
  ],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// SIGNUP
app.post("/signup", async (req, res) => {
  try {
    const email = typeof req.body.email === "string"
      ? req.body.email.trim().toLowerCase()
      : "";

    const password = req.body.password;

    if (
      !email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      typeof password !== "string" ||
      password.length < 8 ||
      Buffer.byteLength(password, "utf8") > 72
    ) {
      return res.status(400).json({
        message: "Enter a valid email and password (8+ characters)"
      });
    }

    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await UserModel.create({
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "Signup successful"
    });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    console.log(error);
    res.status(500).json({
      message: "Something went wrong"
    });
  }
});

// LOGIN
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      return res.status(400).json({
        message: "Email and password are required"
      });
    }

    const user = await UserModel.findOne({
      email: email.trim().toLowerCase()
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user._id.toString() },
      process.env.JWT_SECRET,
      { expiresIn: "1h", algorithm: "HS256" }
    );

    // Store JWT in an HttpOnly cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 1000
    });

    res.status(200).json({
      message: "Login successful"
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong"
    });
  }
});

// LOGOUT
app.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/"
  });

  res.json({
    message: "Logout successful"
  });
});

// PROTECTED DASHBOARD API
app.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to your dashboard",
    userId: req.userId
  });
});

// GET HOLDINGS
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET POSITIONS
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET ORDERS
app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// CREATE NEW ORDER
app.post("/newOrder", async (req, res) => {
  try {
    const name = String(req.body.name || "").trim();
    const qty = Number(req.body.qty);
    const price = Number(req.body.price);
    const mode = String(req.body.mode || "").toUpperCase();

    if (
      !name ||
      !Number.isFinite(qty) || qty <= 0 ||
      !Number.isFinite(price) || price <= 0 ||
      !["BUY", "SELL"].includes(mode)
    ) {
      return res.status(400).json({
        error: "Invalid order details"
      });
    }

    if (mode === "BUY") {
      const holding = await HoldingsModel.findOne({ name });

      if (holding) {
        const totalQty = holding.qty + qty;

        holding.avg =
          ((holding.avg * holding.qty) + (price * qty)) /
          totalQty;

        holding.qty = totalQty;
        holding.price = price;

        await holding.save();
      } else {
        await HoldingsModel.create({
          name,
          qty,
          avg: price,
          price,
          net: "0.00%",
          day: "0.00%"
        });
      }
    } else {
      const holding = await HoldingsModel.findOne({ name });

      if (!holding || holding.qty < qty) {
        return res.status(400).json({
          error: "Not enough shares to sell"
        });
      }

      if (holding.qty === qty) {
        await HoldingsModel.deleteOne({
          _id: holding._id
        });
      } else {
        holding.qty -= qty;
        holding.price = price;
        await holding.save();
      }
    }

    const newOrder = await OrdersModel.create({
      name,
      qty,
      price,
      mode
    });

    res.status(201).json(newOrder);

  } catch (error) {
    console.error("Unable to save order:", error);

    res.status(500).json({
      error: "Unable to save order"
    });
  }
});

// START SERVER
async function startServer() {
  try {
    if (!uri || !process.env.JWT_SECRET) {
      throw new Error("MONGO_URL or JWT_SECRET missing from .env");
    }

    await mongoose.connect(uri);

    console.log("MongoDB connected successfully!");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Server startup failed:", error);
    process.exitCode = 1;
  }
}

startServer();
