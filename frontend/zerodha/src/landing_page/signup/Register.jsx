import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password entered:", password.length > 0);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "450px" }}>
      <h2 className="mb-4">Create your account</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
        />

        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;