import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Signup from "./components/pages/Signup";
import ErrorPage from "./components/pages/ErrorPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact="" component={Home} />
          <Route path="/Signup" component={Signup} />
          <Route path="/sign-up" component={Signup} />
          <Route component={ErrorPage} />{" "}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
