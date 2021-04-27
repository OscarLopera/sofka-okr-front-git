import firebase from "./firebaseInit";
import "firebase/auth";

//Usuario que inicia sesion
export const auth = firebase.auth();


//Funcion para iniciar sesion con Google
export function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
}
