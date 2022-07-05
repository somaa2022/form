import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const ele = screen.getByName(fees)
  expect(ele).toHaveTextContent('1000')
});