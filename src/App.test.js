import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test("renders link to Kirkman's problem", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Kirkman's schoolgirl problem/i);
  expect(linkElement).toBeInTheDocument();
});
