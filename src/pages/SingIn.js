import React from "react";
import Login from "../components/administration/Login";
import Header from "../components/administration/Header";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../functions/firebaseAuth";
import { useHistory } from "react-router-dom";

function SignIn() {
  const history = useHistory();
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Header />
      <section>{user ? history.push("/") : <Login />}</section>
    </div>
  );
}

export default SignIn;
