import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../notificationsWindows.scss'
import axios from 'axios'



const HOST_API = "http://localhost:8080/notifications";


const KrFinish = () => {
    
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [request, setRequest] = useState({keyResult:"", name:""});

    const completedkr = () => {
        axios.get("http://localhost:8080/notifications/completedkr/jvsabvfbvfeh")
        .then(rest=>{
            setRequest({keyResult: rest.data[0], name: rest.data[1]})

        })
    }
    
    useEffect( () => {completedkr()}, [])
    
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
            <button onClick={() => setModalIsOpen(true)} id='buttonNotificationKr'>Terminar Kr</button>
            <Modal isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}>
                <header className='headerNotificationWindows' id='headerNotificationWindows'></header>
                <div className='bodyNotificationWindows' id='bodyNotificationWindows'>
                     <h1>¡{request.name}!</h1>
                    <h3>Terminaste el kr {request.keyResult}</h3> 
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