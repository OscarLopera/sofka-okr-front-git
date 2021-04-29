import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../functions/firebaseAuth';
import Navbar from '../components/structure/Navbar';
import Sidebar from '../components/structure/Sidebar';

export default function Dashboard() {
    const [user] = useAuthState(auth);
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <h1>{user ? auth.currentUser.displayName : ""}  </h1>
        </div>
    )
}