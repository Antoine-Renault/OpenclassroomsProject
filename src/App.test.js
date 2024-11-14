import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome text', () => {
  render(<App />);
  const welcomeText = screen.getByText(/Bienvenue sur Marmite/i);
  expect(welcomeText).toBeInTheDocument();
});
