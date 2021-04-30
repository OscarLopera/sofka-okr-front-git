import React from "react";
import TitleHomeCalendar from "../../components/calendar/TitleHomeCalendar";
import ContentCalendarHome from "../../components/calendar/ContentCalendarHome";
import "../../assets/styles/calendar/Calendar.scss";
import Fondo from "../../assets/img/calendar.svg";
import NavBar from "../../components/structure/Navbar";
import SideBar from "../../components/structure/Sidebar";
import { auth } from "../../functions/firebaseAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "../administration/SingIn";

const Calendar = () => {
  const [user] = useAuthState(auth);

  if (user) {
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
  }
  return <SignIn />;
};

export default Calendar;
