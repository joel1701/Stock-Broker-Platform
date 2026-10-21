const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();


app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
    mongoose.connect(uri);
    console.log("db connected");
})
