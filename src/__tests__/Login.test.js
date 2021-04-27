import React from "react";
import { render, screen, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "../components/administration/Login";
import { signInWithGoogle } from "../functions/firebaseAuth";


afterEach(cleanup);

test("prueba renderizacion de imagen", () => {
  render(<Login signInWithGoogle={signInWithGoogle} />);
  const img = screen.getByTestId("staff-image");
  expect(img.tagName).toBe("IMG");
});

