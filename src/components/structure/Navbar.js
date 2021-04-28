import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdNotifications, MdInput } from "react-icons/md";
import "../../assets/styles/structure/Navbar.css";
import { IconContext } from "react-icons";
import Logo from "./Logo";
import foto from "../../assets/fotoTemporal.jpg";

function Navbar() {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="nav-menu-header">
            <ul>
              <Link>
                <Logo />
              </Link>
            </ul>
            <ul >
              <li className="notifications-icon">
                <Link to="/singin">               
                  <MdNotifications />              
                </Link>
              </li>
              <li>
                <div className="photo-name-nav">
                  <img src={foto} className="image-nav" />
                  <span>Pepito perez</span>
                </div>
              </li>
              <li className="signout-icon">
                <Link to="/singin">
                  <MdInput />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
