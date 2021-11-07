import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { App } from '../../../src/components/App/App';

describe('Check renders btn', () => {
  test('renders Calculate btn', () => {
    const { getByTestId } = render(<App />);
    const buttonElement = getByTestId(/Calculate/i);
    expect(buttonElement).toBeInTheDocument();
  });
  test('renders 1 btn', () => {
    const { getByText } = render(<App />);
    const buttonElement = getByText(/1/i);
    expect(buttonElement).toBeInTheDocument();
  });
  test('renders ! btn', () => {
    const { getByText } = render(<App />);
    const buttonElement = getByText(/!/i);
    expect(buttonElement).toBeInTheDocument();
  });
});

describe('Check working btn', () => {
  test('renders Calculate btn', () => {
    const { getByTestId } = render(<App />);
    const displayElement = getByTestId(/display/i);
    expect(displayElement).toHaveValue('');
    const buttonElement = getByTestId(/1/i);
    expect(buttonElement).toBeInTheDocument();
    userEvent.click(buttonElement);
    expect(displayElement).toHaveValue('1');
  });
});
