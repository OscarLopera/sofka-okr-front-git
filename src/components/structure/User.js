import React from 'react'
import { auth } from "../../functions/firebaseAuth"

const User = () => {
    return <>{auth.currentUser.displayName}</>
    
}

export default User
