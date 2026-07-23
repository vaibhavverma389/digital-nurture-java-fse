import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders employee list and toggles theme context', () => {
  render(<App />);
  
  // Verify that the Employee List header is present
  const headerElement = screen.getByText(/Employees List/i);
  expect(headerElement).toBeInTheDocument();

  // Verify that the action buttons initially have 'dark' class (initial state is dark)
  const actionButtons = screen.getAllByRole('button', { name: /Action Button/i });
  expect(actionButtons.length).toBe(2);
  expect(actionButtons[0]).toHaveClass('dark');
  expect(actionButtons[1]).toHaveClass('dark');

  // Find the toggle button and click it
  const toggleButton = screen.getByRole('button', { name: /Toggle Theme/i });
  fireEvent.click(toggleButton);

  // Verify that the action buttons now have 'light' class
  expect(actionButtons[0]).toHaveClass('light');
  expect(actionButtons[1]).toHaveClass('light');
});
