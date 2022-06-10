import { render, screen } from '@testing-library/react';
import Header from '../Header.js';

describe('APP', () => {
  test('Header component', () => {
    render(<Header />);
    
    expect(screen.getByText(/CARBON CALC/i)).toBeInTheDocument();

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });
 
 
 });
