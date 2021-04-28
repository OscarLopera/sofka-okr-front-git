import React from "react";
import Login from "../components/administration/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../functions/firebaseAuth";
import { useHistory } from "react-router-dom";
import {signInWithGoogle} from '../functions/firebaseAuth'
import Header from '../components/administration/Header'

function SignIn() {
  const history = useHistory();
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Header/>
      <section>{user ? history.push("/dashboard") : <Login signInWithGoogle={signInWithGoogle} />}</section>
    </div>
  );
}

export default SignIn;