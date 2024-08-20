import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('TEST1', () => {
  render(<App />);
  const linkElement = screen.getByText('Vite + React', { selector: 'h1' });
  expect(linkElement).toBe('learn react');
});