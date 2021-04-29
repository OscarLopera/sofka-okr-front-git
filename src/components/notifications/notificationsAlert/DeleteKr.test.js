import React from'react';
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Okrs from '../../../pages/Okrs';

test("Button delete KR", async () =>{
    render(<Okrs/>)
    fireEvent.click(screen.getByTestId("delete-kr-notification"));
    await waitFor(() => screen.getByTitle("¿Estás seguro que quieres eliminar este KR?"))
    expect(screen.getByText('Eliminar KR'))
    expect(screen.getByTitle("¿Estás seguro que quieres eliminar este KR?"))
});


