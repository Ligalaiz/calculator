import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { App } from '../../../src/components/App/App';

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
