import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdNotifications, MdInput } from "react-icons/md";
import "../../assets/styles/structure/Navbar.css";
import { IconContext } from "react-icons";
import Logo from "./Logo";
import foto from "../../assets/fotoTemporal.jpg";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../functions/firebaseAuth'

function Navbar() {
  const [user] = useAuthState(auth);
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
                <Link to="#">
                  <MdNotifications />
                </Link>
              </li>
              <li>
                <div className="photo-name-nav">
                  <img src={user ? auth.currentUser.photoURL : foto} className="image-nav" />
                  <span>{user ? auth.currentUser.displayName : "no asignado"}</span>
                </div>
              </li>
              <li className="signout-icon">
                <Link to="#">
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