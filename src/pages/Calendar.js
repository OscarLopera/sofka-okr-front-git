import React from 'react';
import TitleHomeCalendar from '../components/calendar/TitleHomeCalendar';
import ContentCalendarHome from '../components/calendar/ContentCalendarHome';
import '../assets/styles/calendar/Calendar.scss';
import Fondo from '../components/calendar/images/calendar.svg'

const Calendar = () => {
    return (
        <div className="container-calendar-components-home">
            <TitleHomeCalendar />
            <ContentCalendarHome />
            <img src={Fondo} alt="imagen-calendario"/>
        </div>
    );
}

export default Calendar;