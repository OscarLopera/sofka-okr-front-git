import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../../assets/styles/notifications/notificationsWindows.scss';
import { auth } from '../../../functions/firebaseAuth';
import { useAuthState } from "react-firebase-hooks/auth";

const nameUser =  auth;

const OkrFinish = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const [user] = useAuthState(auth);
    let nombreOkr = "Realizar Encuesta"

    const customStyles = {
        content: {
            top: '20%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            width: '600px',
            transform: 'translate(-40%, -10%)',
            padding: '0',
        },
    };

    return (
        <div >
            <button onClick={() => setModalIsOpen(true)}>Terminar Okr</button>
            <Modal isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}>
                <header className='headerNotificationWindows' id='headerNotificationWindows'></header>
                <div className='bodyNotificationWindows' id='bodyNotificationWindows'>
                    <h1 className='h1NotificationWindows'>¡{user? nameUser.currentUser.displayName :""}! </h1>
                    <h2 className='h1NotificationWindows'>Terminaste el Okr {nombreOkr}</h2>
                    <p className='pNotificationWindows'>"Nuestra recompensa se encuentra en el esfuerzo y no en el
                    resultado, un esfuerzo total es una víctoria completa (Mahatma Gandhi)".</p>
                </div>
                <div className='imageNotificationWindows' id='imageNotificationWindows'>
                    <img src="https://www.sofka.com.co/wp-content/uploads/2020/08/sofka-logo-gradient-white.png" alt="logo-sofka"></img>
                </div>
                <footer className='footerNotificationWindows' id='footerNotificationWindows'></footer>
            </Modal>
        </div>
    )
}

export default OkrFinish;