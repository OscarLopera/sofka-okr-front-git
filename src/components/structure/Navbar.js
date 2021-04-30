import React from "react";
import { Link } from "react-router-dom";
import { MdInput } from "react-icons/md";
import "../../assets/styles/structure/Navbar.scss";

import { IconContext } from "react-icons";
import Logo from "./Logo";
import foto from "../../assets/img/fotoTemporal.jpg";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../functions/firebaseAuth';
import { SingOut } from './SignOut';
import Bell from "../notifications/modalbell/ModalBell";
import {Profile} from './Profile'

function Navbar() {
  const state = {
    data: [
        {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3a',
            name: 'Notification Proyect',
            typeN: 'OKR',
            detail: '30',
            viewed: 'false'
        },
        {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3b',
            name: 'Notification Proyect',
            typeN: 'OKR',
            detail: '70',
            viewed: 'true'
        },
        {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3b',
            name: 'Notification Proyect',
            typeN: 'OKR',
            detail: '100 Or Finished',
            viewed: 'true'
        },
        {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3a',
            name: 'Notification Proyect',
            typeN: 'KR',
            detail: '30',
            viewed: 'true'
        },
        {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3b',
            name: 'Notification Proyect',
            typeN: 'KR',
            detail: '70',
            viewed: 'true'
        },
        {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3b',
            name: 'Notification Proyect ',
            typeN: 'KR',
            detail: '100',
            viewed: 'true'
        },
    ],
};

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
                <li><Bell state={state.data} /></li>
                </span>
              </li>
              <li>
                <Link to= "/profile">
                <div id= "photo-name-nav" className="photo-name-nav" onClick={Profile}>
                  <img src={user ? auth.currentUser.photoURL : foto} className="image-nav" alt="Avatar" />
                  <span>{user ? auth.currentUser.displayName : "no asignado"}</span>
                </div>
                </Link>
              </li>
              <li className="signout-icon">
                <span id = "span-logout-navbar" data-testid="icon-logout" onClick={SingOut}>
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

