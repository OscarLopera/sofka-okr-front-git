import React from "react";
import Navbar from "../../components/structure/Navbar";
import Sidebar from "../../components/structure/Sidebar";
import { auth } from "../../functions/firebaseAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "../administration/SingIn";

export default function DashboardPersonal() {
  const [user] = useAuthState(auth);

  if (user) {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <h1>DashboardPersonal </h1>
      </div>
    );
  }
  return <SignIn />;
}
