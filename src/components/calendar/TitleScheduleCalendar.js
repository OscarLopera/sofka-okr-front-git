import React from 'react';
import { getFromLocal } from '../../functions/localStorage';


const TitleHomeCalendar = () => {
    const okr = getFromLocal('OKR-CALENDAR')

    return (
        <div id="container-title-calendar-schedule" className="container-title-calendar-home">
            <h2 id="title-calendar-schedule-left" >Calendario</h2>
            <h2 id="title-calendar-schedule-rigth" >{okr}</h2>
        </div>
    );
}

export default TitleHomeCalendar;
