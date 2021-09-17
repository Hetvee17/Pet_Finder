import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
//import Signup from "./components/pages/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact="" component={Home} />
        </Switch>
      </Router>
      <Router>
        {/* <Switch>
          <Route path="/Signup" component={Signup} />
        </Switch> */}
         <Footer />
      </Router>
    </>
  );
}

export default App;
