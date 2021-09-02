import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
function Navbar() {
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

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" classname="navbar-logo">
          PetFinder <i class="fas fa-paw"></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-window-close" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li clasName="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li clasName="nav-item">
            <Link to="/Dogs" className="nav-links" onClick={closeMobileMenu}>
              Dogs
            </Link>
          </li>
          <li clasName="nav-item">
            <Link to="/Cats" className="nav-links" onClick={closeMobileMenu}>
              Cats
            </Link>
          </li>
          <li clasName="nav-item">
            <Link
              to="/UserProfile"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              User-Profile
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
            <Link to="/SignUp" className="nav-links" onClick={closeMobileMenu}>
              SignUp
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">SignUp</Button>}
      </div>
    </nav>
  );
}
export default Navbar;
