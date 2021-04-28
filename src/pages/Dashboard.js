import React from 'react'
import Welcome from '../components/notifications/welcome/Welcome'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../functions/firebaseAuth";

export default function Dashboard() {
    const [user] = useAuthState(auth);
    return (
        <div className='home'>
            <section>
            {user ? <Welcome/> :""}
            </section>
            <h1>Bienvenido a tu Dashboard  </h1>
        </div>
    )
}