import React from "react";
import { render,screen,cleanup,fireEvent} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom"
import "@testing-library/jest-dom/extend-expect";
import Sidebar from "../components/structure/Sidebar";
import Navbar from "../components/structure/Navbar"
import Login from "../components/administration/Login"
import MyOkrs from "../pages/planification/Okrs"
import Calendar from "../pages/calendar/Calendar"
import { SingOut } from '../components/structure/SignOut';


afterEach(cleanup);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/dashboard"
  })
}));

test("prueba renderización page login cuando presiona logout", () => { 
  const signInWithGoogle = jest.fn();
  render(<BrowserRouter><Navbar/></BrowserRouter>);
  fireEvent.click(screen.getByTestId("icon-logout"));
  expect(render(<Login signInWithGoogle={signInWithGoogle} />));
});

test("prueba renderización page myokrs cuando se presiona botón sidebar", () => { 
  render(<BrowserRouter><Sidebar/></BrowserRouter>);
  fireEvent.click(screen.getByTestId("button-okrs"));
  expect(render(<BrowserRouter><MyOkrs/></BrowserRouter>));
});

test("prueba renderización page calendar cuando presiono calendar en el sidebar", () => {  
  render(<BrowserRouter><Sidebar/></BrowserRouter>);
  fireEvent.click(screen.getByTestId("calendar"));
  expect(render(<BrowserRouter><Calendar/></BrowserRouter>));
});





