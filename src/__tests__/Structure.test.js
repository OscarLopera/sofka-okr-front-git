import React from "react";
import { render,cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Support from "../pages/administration/Support";


test("Click", () => {
  const {container} = render(<Support />);
  const button = getByTestId(container, 'btn-how-to-choose-provider');
  fireEvent.click(button);
});
