import React from "react";
import { Link } from "react-router-dom";
import { MdNotifications, MdInput } from "react-icons/md";
import "../../assets/styles/structure/Navbar.css";
import { IconContext } from "react-icons";
import Logo from "./Logo";
import foto from "../../assets/fotoTemporal.jpg";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../functions/firebaseAuth';
import { SingOut } from './SignOut'


function Navbar() {
  const [user] = useAuthState(auth);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div id = "navbar" className="navbar">
          <div id = "nav-menu-header" className="nav-menu-header">
            <ul id = "list-logo">
              <Link to="/dashboard">
                <Logo />
              </Link>
            </ul>
            <ul id = "list-notifications">
              <li id = "notifications-icon" className="notifications-icon">
                <span id = "span-notificaciones-navbar">
                  <MdNotifications />
                </span>
              </li>
              <li>
                <div id= "photo-name-nav" className="photo-name-nav">
                  <img src={user ? auth.currentUser.photoURL : foto} className="image-nav" alt="Avatar" />
                  <span>{user ? auth.currentUser.displayName : "no asignado"}</span>
                </div>
              </li>
              <li className="signout-icon">
                <span id = "span-logout-navbar" onClick={SingOut}>
                  <MdInput />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
