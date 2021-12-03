import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './calculator';

describe('Calculator test', () => {
  test('Preview clicked number', () => {
    render(<Calculator />);
    const numFour = screen.getByText('4');
    const output = screen.getByRole('none');
    fireEvent.click(numFour);
    expect(output.textContent).toBe('4');
  });
  test('Preview clicked operation', () => {
    render(<Calculator />);
    const plusSymbol = screen.getByText('+');
    const output = screen.getByRole('none');
    fireEvent.click(plusSymbol);
    expect(output.textContent).toBe('0+');
  });
  test('displays correct addition', () => {
    render(<Calculator />);
    const two = screen.getByText('2');
    const three = screen.getByText('3');
    const plusSymbol = screen.getByText('+');
    const equal = screen.getByText('=');
    const output = screen.getByRole('none');
    fireEvent.click(two);
    fireEvent.click(plusSymbol);
    fireEvent.click(three);
    fireEvent.click(equal);
    expect(output.textContent).toBe('5');
  });
});
