import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" classname="navbar-logo">
          PetFinder <i class="fas fa-paw"></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-window-close" : "fas fa-bars"}></i>
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li clasName="nav-item" onClick={closeMobileMenu}>Home</li>
              </ul>
      </div>
    </nav>
  );
}
export default Navbar;
