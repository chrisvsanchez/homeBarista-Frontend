import React from "react";
// import logo from './logo.svg';
import "./App.scss";
import MainContainer from "./components/MainContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import { Routes } from "react-router-dom";
// import { Route } from "react-router-dom";

// import { NavBar, Home, UserFeedPage, Footer } from "./components/";

function App() {
  return (
    <>
      <div>
        {/* <Routes> */}
        {/* <Route></Route> */}
        {/* <NavBar /> */}
        <MainContainer />
        {/* </Routes> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
