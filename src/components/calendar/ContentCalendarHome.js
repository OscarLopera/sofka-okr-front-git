import React from 'react';
import { useHistory } from 'react-router-dom';

const ContentCalendarHome = () => {
    const history = useHistory();
    const redirecting = ()=>{
        history.push('/schedule')
    }
    return (
        <div id="container-content-calendar-home" className="container-content-calendar-home">
            <p id="text-content-calendar-home">
                Cada OKR tiene sus propios eventos, si quieres agregar un evento
                debes seleccionar el OKR implicado. Si no aparece ninguno, ¡crea uno
                desde nuestro dashboard!
            </p>
                <button onClick={redirecting} id="btn-home-calendar">Continuar</button>
        </div>
    );
}

export default ContentCalendarHome;
