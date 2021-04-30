import React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContentScheduleCalendar from '../components/calendar/ContentScheduleCalendar';

afterEach(cleanup);

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Testeando el renderizado de la página para crear eventos", () => {
  act(() => {
    render(<ContentScheduleCalendar />, container);
  });
  expect(container.textContent).toBe("TítuloAsistenteDescripciónFecha del eventoHora de inicioHora finalEnviar");
});