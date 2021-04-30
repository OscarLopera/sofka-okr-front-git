import React from'react';
import {screen, render, getByLabelText, fireEvent, getByDisplayValue, getByText} from "@testing-library/react";
import Okrs from '../../../pages/Okrs';

test("Button delete OKR", () =>{
    render(<Okrs/>);
    fireEvent.click(screen.getByTestId("delete-okr-notification")); 
    expect(screen.getByText('Eliminar OKR'))
});
