import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "../components/administration/Login";
import SignIn from '../pages/SingIn';

const useAuthState = jest.fn(()=> {return {displayName: "jncwln"}});
const useHistory = jest.fn();

afterEach(cleanup);

test("prueba renderizacion de imagen", () => {
  const signInWithGoogle = jest.fn();
  render(<Login signInWithGoogle={signInWithGoogle} />);
  const img = screen.getByTestId("staff-image");
  expect(img.tagName).toBe("IMG");
});

test("Validacion de accion login", () => {
  const signInWithGoogle = jest.fn();

  render(<Login signInWithGoogle={signInWithGoogle} />);

  fireEvent.click(screen.getByTestId("buttonSinginwithGoogle"));

  expect(signInWithGoogle).toBeCalled();
});

test("Validacion de accion login y su consecuencia", () => {
  const signInWithGoogle = jest.fn();

  render(<Login signInWithGoogle={signInWithGoogle} />);

  fireEvent.click(screen.getByTestId("buttonSinginwithGoogle"));

  expect(signInWithGoogle).toBeCalled();


});



test('', ()=>{
  
})