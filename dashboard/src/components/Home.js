import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import Logout from "./Logout";

const Home = () => {
  return (
    <>
      <TopBar />
      <Dashboard />
      <Logout />
    </>
  );
};

export default Home;
