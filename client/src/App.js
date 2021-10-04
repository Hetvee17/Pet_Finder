import "./App.css";
import React, { useReducer, createContext } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Signup from "./components/pages/Auth/Signup";
import Login from "./components/pages/Auth/Login";
import Logout from "./components/pages/Auth/Logout";
import ErrorPage from "./components/pages/ErrorPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import UserProf from "./components/pages/UserProf";
import { initialState, reducer } from "../src/reducer/UseReducer";

//contextapi
export const UserContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact="" component={Home} />
            <Route path="/Signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/UserProfile" component={UserProf} />
            <Route component={ErrorPage} />
          </Switch>
          <Footer />
        </Router>
      </UserContext.Provider>
    </>
  );
};

export default App;
