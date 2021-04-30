import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TitleHomeCalendar from '../components/calendar/TitleHomeCalendar';

describe('Testing by Calendar Home page', () => {
    test('Testing the rendering of content text by <TitleHomeCalendar />', () => {
        render(<TitleHomeCalendar />);

        expect(screen.getByTestId('select-title-calendar-home').textContent).toBe('Elige el OKR:');
        expect(screen.getByTestId('select-title-calendar-home').textContent).not.toBe('Elige el OKR');
        expect(screen.getByTestId('select-title-calendar-home').tagName).toBe('H4');
        expect(screen.getByTestId('select-title-calendar-home').tagName).not.toBe('H1');

        expect(screen.getByTestId('option-title-calendar-home').textContent).toBe("OKR's");
        expect(screen.getByTestId('option-title-calendar-home').textContent).not.toBe("OKR");
        expect(screen.getByTestId('option-title-calendar-home').tagName).toBe("OPTION");
        expect(screen.getByTestId('option-title-calendar-home').tagName).not.toBe("SPAN");

        expect(screen.getByTestId('title-calendar-home').textContent).toBe('Calendario');
        expect(screen.getByTestId('title-calendar-home').textContent).not.toBe('Calendarios');
        expect(screen.getByTestId('title-calendar-home').tagName).not.toBe('P');
        expect(screen.getByTestId('title-calendar-home').tagName).toBe('H2');
    });
});