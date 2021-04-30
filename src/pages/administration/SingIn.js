import React from "react";
import Login from "../../components/administration/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle } from "../../functions/firebaseAuth";
import { useHistory } from "react-router-dom";
import Header from '../../components/administration/Header';
import { environment} from '../../environment/backendurl'

function SignIn() {
  const history = useHistory();
  const [user] = useAuthState(auth);

  const createUser = () => {
    const HOST_API = environment.apiRegisterUser

    const user = {
      id: auth.currentUser.uid,
      name: auth.currentUser.displayName,
      email: auth.currentUser.email,
      mailCompletedOkr: true,
      mailCompletedKr: true,
      notificationCompletedKr: true,
      notificationCompletedOkr: true,
    };

    fetch(HOST_API, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => console.log("hola"));
  };

  if (user) {
    createUser();
  }
  return (
    <div className="App">
      <section>
        <Header />
        {user ? (history.push("/dashboard")) : (<Login signInWithGoogle={signInWithGoogle} />)}
      </section>
    </div>
  );
}

export default SignIn;
