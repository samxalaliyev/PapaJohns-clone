import React from "react";
import Header from "../Header/Header";
import Navbar from "../Header/Navbar";
import Pizza from "./Pizza";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <Pizza />
    </div>
  );
};

export default Home;
