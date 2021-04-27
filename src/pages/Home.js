import React from "react";
import { auth } from "../functions/firebaseAuth";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  if (!auth.currentUser){
      history.push("/singin");
  }
  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  );
}
