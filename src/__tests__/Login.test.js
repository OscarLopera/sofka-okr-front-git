import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "../components/administration/Login";
import { signInWithGoogle } from "../functions/firebaseAuth";

afterEach(cleanup);
test("prueba usuario logueado", () => {
  const login =render(<Login signInWithGoogle={signInWithGoogle} />);
  const btn = screen.getByTestId("buttonSinginwithGoogle");
  fireEvent.click(btn);
  login.debug();
});
