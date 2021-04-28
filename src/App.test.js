<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  
});
=======
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect'

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByText('Sofka y SofkaU')).toBeInTheDocument();
});
>>>>>>> upstream/main
