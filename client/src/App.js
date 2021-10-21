import "./App.css";
import React, { useReducer, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { initialState, reducer } from "./reducer/UseReducer";

import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/layouts/Footer";
import Signup from "./components/pages/Auth/Signup";
import Login from "./components/pages/Auth/Login";
import Logout from "./components/pages/Auth/Logout";
import ErrorPage from "./components/pages/ErrorPage";
import UserProf from "./components/User/UserProf";
import DonatePet from "./components/pages/Pets/DonatePet";
import PetDetail from "./components/pages/Pets/PetDetails";
import Pets from "./components/pages/Pets/Pets";
import Dogs from "./components/breed/Dogs";
import "./App.css";

//import store from "./store"
//import { loadUser } from "./actions/userActions";
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
            <Route path="/Pet/:id" component={PetDetail} />
            <Route path="/Pets/Add" component={DonatePet} />
            <Route path="/breeds" component={Dogs} />
            <Route path="/Pets/:keyword" component={Pets} />
            <Route path="/Pets" component={Pets} />

            <Route path="/Pets/:keyword/:catagory" component={Pets} />
            <Route component={ErrorPage} />
          </Switch>
          <Footer />
        </Router>
      </UserContext.Provider>
    </>
  );
};

export default App;
