import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../../src/components/App';

describe('Check renders btn', () => {
  test('renders Display', () => {
    const { getByTestId } = render(<App />);
    const displayElement = getByTestId(/display/i);
    expect(displayElement).toBeInTheDocument();
  });
  test('renders Display', () => {
    const { getByTestId } = render(<App />);
    const displayElement = getByTestId(/display/i);
    expect(displayElement).toHaveClass('display');
  });
});
