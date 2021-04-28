import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from '../functions/firebaseAuth'

export default function Dashboard() {
    const [user] = useAuthState(auth);
    return (
        <div className='home'>
            <h1>{user? auth.currentUser.displayName:""}  </h1>
        </div>
    )
}