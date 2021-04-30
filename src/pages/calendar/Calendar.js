import React from "react";
import TitleHomeCalendar from "../../components/calendar/TitleHomeCalendar";
import ContentCalendarHome from "../../components/calendar/ContentCalendarHome";
import "../../assets/styles/calendar/Calendar.scss";
import Fondo from "../../assets/img/calendar.svg";
import NavBar from "../../components/structure/Navbar";
import SideBar from "../../components/structure/Sidebar";

const Calendar = () => {

    return (
      <div
        id="container-calendar-components-home"
        className="container-calendar-components-home"
      >
        <NavBar />
        <SideBar />
        <TitleHomeCalendar />
        <ContentCalendarHome />
        <img
          id="imagen-home-calendario"
          className="imagen-home-calendario"
          src={Fondo}
          alt="imagen-calendario"
        />
      </div>
    );
};

export default Calendar;
