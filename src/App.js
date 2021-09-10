import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Footer />
        <Switch>
          <Route path="/" exact="" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
