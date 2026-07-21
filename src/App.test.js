import { render, screen } from '@testing-library/react';
import Application from './Application';

test('renders learn react link', () => {
  render(<Application />);
  const lienElement = screen.getByText(/learn react/i);
  expect(lienElement).toBeInTheDocument();
});
