import React from "react";
import dashboard from "../pages/Dashboard"

let container = null;
beforeEach(() => {
  // configurar un elemento del DOM como objetivo del renderizado
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // limpieza al salir
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renderiza", () => {
  act(() => {
    render(<dashboard />, container);
  });
  expect(container.textContent).toBe("");
});