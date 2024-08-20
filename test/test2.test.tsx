import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('TEST2', () => {
  render(<App />);
  screen.getByText('Vite + React', { selector: 'h1' });
  expect('learn react').toBe('learn react');
});