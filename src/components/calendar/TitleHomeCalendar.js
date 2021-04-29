import React from 'react';
import ListOkrCalendar from './ListOkrCalendar';

const TitleHomeCalendar = () => {
    return (
        <div id="container-title-calendar-home" className="container-title-calendar-home">
            <h2 id="title-calendar-home" data-testid="title-calendar-home">Calendario</h2>
            <ListOkrCalendar />
        </div>
    );
}

export default TitleHomeCalendar;
