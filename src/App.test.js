import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByText('Sofka y SofkaU')).toBeInTheDocument();
});

