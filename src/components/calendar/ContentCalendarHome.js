import React from 'react';
import { Link } from 'react-router-dom';

const ContentCalendarHome = () => {
    return (
        <div id="container-content-calendar-home" className="container-content-calendar-home">
            <p id="text-content-calendar-home">
                Cada OKR tiene sus propios eventos, si quieres agregar un evento
                debes seleccionar el OKR implicado. Si no aparece ninguno, ¡crea uno
                desde nuestro dashboard!
            </p>
            <Link id="container-btn-home-calendar" to="/calendar/schedule">
                <button id="btn-home-calendar">Continuar</button>
            </Link>
        </div>
    );
}

export default ContentCalendarHome;
