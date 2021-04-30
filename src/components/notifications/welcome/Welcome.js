import React, { useState } from 'react';
import Modal from 'react-modal';
import { auth } from '../../../functions/firebaseAuth';
import '../../../assets/styles/notifications/notificationsWindows.scss';
import { useAuthState } from "react-firebase-hooks/auth";

const nameUser =  auth;

const Welcome = () => {
    const [modalIsOpen, setModalIsOpen] = useState(true)
    const [user] = useAuthState(auth);
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
        <div id="root">
            <Modal isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}>
                <header className='headerNotificationWindows' id='headerNotificationWindows'></header>
                <div className='bodyNotificationWindows' id='bodyNotificationWindows'>
                    <h1 className='h1NotificationWindows' id='h1NotificationWindows'> ¡Bienvenido {user? nameUser.currentUser.displayName :""}! </h1>
                    <p className='pNotificationWindows' id='pNotificationWindows'>"Estamos felices de tenerte en nuesto Dashboard, esperamos que podamos aprender de tus aportes"</p>
                </div>
                <div className='imageNotificationWindows' id='imageNotificationWindows'>
                    <img src="https://www.sofka.com.co/wp-content/uploads/2020/08/sofka-logo-gradient-white.png" alt="logo-sofka"></img>
                </div>
                <footer className='footerNotificationWindows' id='footerNotificationWindows'></footer>
            </Modal>
        </div>
    )
}

export default Welcome;
