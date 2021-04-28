import React, { useState } from 'react';
import Modal from 'react-modal';
import '../notificationsWindows.scss'

const Welcome = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    let nombre = "Andres Caro"

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
            <button onClick={() => setModalIsOpen(true)}>Crear un Usuario</button>
            <Modal isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}>
                <header className='headerNotificationWindows' id='headerNotificationWindows'></header>
                <div className='bodyNotificationWindows' id='bodyNotificationWindows'>
                    <h1 className='h1NotificationWindows' id='h1NotificationWindows'>¡Bienvenido {nombre}! </h1>
                    <p className='pNotificationWindows' id='pNotificationWindows'>"Estamos felices de tenerte como un nuevo integrante, esperamos que podamos aprender de tus aportes"</p>
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

//Todo No borrar llave para enviar correos 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

//Todo No borrar llave para enviar correos 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
