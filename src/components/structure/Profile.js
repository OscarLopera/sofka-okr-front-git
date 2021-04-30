import React from 'react';
import { auth } from '../../functions/firebaseAuth';
import NavBar from './Navbar'
import SideBar from './Sidebar'
import foto from "../../assets/img/fotoTemporal.jpg";
import '../../assets/styles/structure/Profile.css'
import { Link } from 'react-router-dom';

export function Profile (){
    const user = auth.currentUser;
    return(
        <div>
            <NavBar/>
            <SideBar/>
            <div className="profile">
                <div>
                <h2>Profile</h2>
                    <img src={user ? auth.currentUser.photoURL : foto} className="profile-img" alt="Avatar" />
                    <span>{user ? auth.currentUser.displayName : "No asignado"}</span>
                    <span>{user ? auth.currentUser.email : "No asignado"}</span>
                    <span>Super usuario</span>  
                </div>
                <Link to = "/dashboard">
                <button className="buttonProfile" >Volver</button>
                </Link>
                
            </div>
        </div>
    );
}




//<div id= "photo-name-nav" className="photo-name-nav">
                 // <img src={user ? auth.currentUser.photoURL : foto} className="image-nav" alt="Avatar" />
                  //<span>{user ? auth.currentUser.displayName : "no asignado"}</span>
                //</div>