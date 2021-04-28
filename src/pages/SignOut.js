import firebase from 'firebase';
import React from 'react';
//import { auth } from '../functions/firebaseAuth';
import Home from './Home';

const auth = firebase.auth;

var timeout;
window.onload=resetTimer;
document.onkeypress=resetTimer;
document.onmousemove=resetTimer;
export default function logout()
{
    alert("El sistema se cerrará por 2 minutos de inactividad.");
    window.location.href= Home; 
}
function resetTimer()
{
    clearTimeout(timeout);
    timeout=setTimeout(logout,120000) //2 minutos de inactividad, tiempo en ms
}

export function SingOut(){
    return auth.currentUser && (
        <button className="SignOut" onClick={() => {
            auth.signOut();
        }}></button>
    )
}


/*

document.onmouseout = function(){    
    counterSesion();
};
/*

*/
/*
function SignOut(){

    window.location.href =  Home + "/singout";
    alert('La sesión ha caducado. Por favor vuelva a iniciar sesión')
    
}
let timeout;
function counterSesion(){
    
    timeout = setTimeout(function(){
        if (document.onmousemove){
            clearTimeout(timeout);
        }
        else{

        }
    }
        ,120000)
}
/*function SignOutAutomatic() {
  return 
}*/
