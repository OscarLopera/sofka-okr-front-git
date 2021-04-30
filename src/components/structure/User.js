import React from 'react'
import { auth } from "../../functions/firebaseAuth"
import { useAuthState } from "react-firebase-hooks/auth";

const User = () => {
    const [user] = useAuthState(auth);
    return <>{user? auth.currentUser.displayName:""}</>
    
}

export default User
