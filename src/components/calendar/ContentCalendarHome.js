import React from 'react';
import { Link } from 'react-router-dom';

const ContentCalendarHome = () => {
    return (
        <div className="container-content-calendar-home">
            <p>
                Cada OKR tiene sus propios eventos, si quieres agregar un evento
                debes seleccionar el OKR implicado. Si no aparece ninguno, ¡crea uno
                desde nuestro dashboard!
            </p>
            <Link to="/calendar/schedule"><button>Continuar</button></Link>
        </div>
    );
}

export default ContentCalendarHome;
