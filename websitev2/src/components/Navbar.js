
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import Logo from '../assets/Ghost_Logo_v2_mobile.png'

function Navbar() {
  const [click, setClick] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            <img src={Logo} alt="Logo"/>
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/team"
                activeClassName="active"
                className={`nav-links ${location.pathname === '/team' ? 'active' : ''}`}
                onClick={handleClick}
              >
                Our Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/bike"
                activeClassName="active"
                className={`nav-links ${location.pathname === '/bike' ? 'active' : ''}`}
                onClick={handleClick}
              >
                The Bike
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/contact"
                activeClassName="active"
                className={`nav-links ${location.pathname === '/contact' ? 'active' : ''}`}
                onClick={handleClick}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/join"
                activeClassName="active"
                className={`nav-links ${location.pathname === '/join' ? 'active' : ''}`}
                onClick={handleClick}
              >
                Join
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;