import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../../src/App';

test('renders btn', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/^\d{1}/i);
  expect(buttonElement).toBeInTheDocument();
});
