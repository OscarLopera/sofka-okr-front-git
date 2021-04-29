import React from'react';
import {screen, render, getByLabelText, fireEvent, getByDisplayValue, getByText} from "@testing-library/react";
import Okrs from '../../../pages/Okrs';


test("Button edit OKR", () =>{
    render(<Okrs/>);
    fireEvent.click(screen.getByTestId("edit-okr-notification")); 
    expect(screen.getByText('Editar OKR'))
});


// // toggle.test.js

// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";

// import Toggle from "./toggle";

// let container = null;
// beforeEach(() => {
//   // configurar un elemento del DOM como objetivo del renderizado
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // limpiar al salir
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it("cambia el valor cuando se le hace clic", () => {
//   const onChange = jest.fn();
//   act(() => {
//     render(<Toggle onChange={onChange} />, container);
//   });

//   // encuentra el elemento  del botón y dispara algunos clics en él
//   const button = document.querySelector("[data-testid=toggle]");
//   expect(button.innerHTML).toBe("Turn on");

//   act(() => {
//     button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });

//   expect(onChange).toHaveBeenCalledTimes(1);
//   expect(button.innerHTML).toBe("Turn off");

//   act(() => {
//     for (let i = 0; i < 5; i++) {
//       button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//     }
//   });

//   expect(onChange).toHaveBeenCalledTimes(6);
//   expect(button.innerHTML).toBe("Turn on");
//