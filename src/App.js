import React from "react";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Feed from "./Components/Feed/Feed";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feed />
    </>
  );
}

export default App;
