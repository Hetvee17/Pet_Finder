import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { UserContext } from "../../App.js";
console.log(logo);
function Navbar() {
  const { state } = useContext(UserContext);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);
  const RenderMenu = () => {
    if (state) {
      return (
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li clasName="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li clasName="nav-item">
            <Link
              to="/UserProfile"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              User Profile
            </Link>
          </li>

          <li clasName="nav-item">
            <Link to="/pets" className="nav-links" onClick={closeMobileMenu}>
              Pets
            </Link>
          </li>

          <li clasName="nav-item">
            <Link to="/breeds" className="nav-links" onClick={closeMobileMenu}>
              Breeds
            </Link>
          </li>
          <li clasName="nav-item">
            <Link to="/Adopted" className="nav-links" onClick={closeMobileMenu}>
              Adopted
            </Link>
          </li>
          <li clasName="nav-item">
            <Link
              to="/Pets/Add"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Add Pet
            </Link>
          </li>
          <li>
            {button && (
              <Button buttonStyle="btn--outline">
                <Link to="/Logout">Logout</Link>
              </Button>
            )}
          </li>
        </ul>
      );
    } else {
      return (
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li clasName="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li clasName="nav-item">
            <Link
              to="/UserProfile"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              User Profile
            </Link>
          </li>

          <li clasName="nav-item">
            <Link to="/pets" className="nav-links" onClick={closeMobileMenu}>
              Pets
            </Link>
          </li>
          <li clasName="nav-item">
            <Link to="/breeds" className="nav-links" onClick={closeMobileMenu}>
              Breeds
            </Link>
          </li>
          <li clasName="nav-item">
            <Link to="/Adopted" className="nav-links" onClick={closeMobileMenu}>
              Adopted
            </Link>
          </li>
          <li>
            {button && (
              <Button buttonStyle="btn--outline">
                <Link to="/Login">Login</Link>
              </Button>
            )}
          </li>
        </ul>
      );
    }
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="Petfinder" className="image-logo"></img>
            <i class="fas fa-paw"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-window-close" : "fas fa-bars"}></i>
          </div>
          <RenderMenu />
        </div>
      </nav>
    </>
  );
}
export default Navbar;
