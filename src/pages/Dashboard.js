import React from 'react'
import {auth} from '../functions/firebaseAuth'

export default function Dashboard() {
    return (
        <div className='home'>
            <h1>Bienvenido a tu Dashboard {auth.currentUser.displayName} </h1>
            <h3>{auth.currentUser.uid}</h3>
        </div>
    )
}
