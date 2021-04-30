import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("prueba de ícono de la campana", ()=>{
    const bell = screen.getByTestId("notifications-icon");

    expect(bell.tagName).toBe("LI");
})