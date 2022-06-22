import { render, screen } from '@testing-library/react';
import Notfound from '../notfound';

describe('notfound', () => {
  test('notfound component', () => {
    render(<Notfound />);
    expect(screen.getByText(/Error 404/i)).toBeInTheDocument();
  });
 
 });
