import React, { useState } from 'react';
import Modal from 'react-modal';
import '../notificationsWindows.scss'

const KrFinish = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    let nombre = "Andres Caro"
    let nombreOkr = "Estudio de Encuesta"
    let nombrekr = "Realizar Encuesta a 100 personas"

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
            <button onClick={() => setModalIsOpen(true)}>Terminar Kr</button>
            <Modal isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}>
                <header className='headerNotificationWindows' id='headerNotificationWindows'></header>
                <div className='bodyNotificationWindows' id='bodyNotificationWindows'>
                    <h1>¡ {nombre}! </h1>
                    <h2> {nombreOkr}</h2>
                    <h3>Terminaste el kr {nombrekr}</h3>
                    <p>"Nuestra recompensa se encuentra en el esfuerzo y no en el
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

export default KrFinish;