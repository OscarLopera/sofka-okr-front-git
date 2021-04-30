import React from 'react';
import TitleScheduleCalendar from '../../components/calendar/TitleScheduleCalendar';
import ContentScheduleCalendar from '../../components/calendar/ContentScheduleCalendar';
import Navbar from '../../components/structure/Navbar';
import Sidebar from '../../components/structure/Sidebar';

function Schedule() {

    return (
        <div>
            <Navbar />
            <Sidebar />
            <TitleScheduleCalendar />
            <ContentScheduleCalendar />
        </div>
    )
}

export default Schedule;
