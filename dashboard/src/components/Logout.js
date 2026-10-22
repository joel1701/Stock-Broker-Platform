import React from "react";
import axios from "axios";

function Logout() {
  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3002/logout",
        {},
        { withCredentials: true }
      );

      window.location.replace("http://localhost:5173/login");
    } catch (error) {
      console.log(error);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <button onClick={handleLogout} className="btn btn-danger">
      Logout
    </button>
  );
}

export default Logout;