import "./styles.css";
import React, { useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
// import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      {/* <Footer /> */}
    </div>
  );
}
