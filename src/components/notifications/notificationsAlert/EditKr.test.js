import React from'react';
import {screen, render, getByLabelText, fireEvent, getByDisplayValue, getByText} from "@testing-library/react";
import Okrs from '../../../pages/Okrs';

test("Button edit KR", () =>{
    render(<Okrs/>);
    fireEvent.click(screen.getByTestId("edit-kr-notification")); 
    expect(screen.getByText('Editar KR'))
});
