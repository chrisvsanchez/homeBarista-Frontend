import React from "react";
// import logo from './logo.svg';
import "./App.css";
import MainContainer from "./components/MainContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import { Routes } from "react-router-dom";
// import { Route } from "react-router-dom";

// import { NavBar, Home, UserFeedPage, Footer } from "./components/";

function App() {
  return (
    <div style={{ backgroundColor: "#ddc9b4" }}>
      {/* <Routes> */}
      {/* <Route></Route> */}
      <NavBar />
      <MainContainer />
      <Footer />
      {/* </Routes> */}
    </div>
  );
}

export default App;
