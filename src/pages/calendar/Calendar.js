import React from 'react';
import TitleHomeCalendar from '../../components/calendar/TitleHomeCalendar';
import ContentCalendarHome from '../../components/calendar/ContentCalendarHome';
import '../../assets/styles/calendar/Calendar.scss';
import Fondo from '../../components/calendar/images/calendar.svg'

const Calendar = () => {
    return (
        <div id="container-calendar-components-home" className="container-calendar-components-home">
            <TitleHomeCalendar />
            <ContentCalendarHome />
            <img id="imagen-home-calendario" src={Fondo} alt="imagen-calendario"/>
        </div>
    );
}

export default Calendar;