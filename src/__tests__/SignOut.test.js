import React from 'react';
import { render, screen,  fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from '../pages/Dashboard';
import { resetTimer, logout } from '../pages/SignOut';
import Navbar from '../../src/components/structure/Navbar';

const auth = jest.fn();

//afterEach(cleanup);
jest.useFakeTimers();
test("prueba de cerrado de sesión automático", () =>{
    


    render(Dashboard);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeOut).toHaveBeenLastCalledWith(expect.any(logout), 120000);
});

test("prueba de cerrado de sesión, a través del ícono de logout", ()=>{

    const {container} = render(<NavBar />);
    
    const button = getByTestId(container, 'signout-icon');

    
  //  const SignOut = jest.fn();
    
    
    fireEvent.click(button);

//    expect(SignOut).toBeCalled();


});

/*test('waits 1 second before ending the game', () => {
  const timerGame = require('../timerGame');
  timerGame();
  expect(jest.useFakeTimers()).toBeCalledTimes(120000);
  */