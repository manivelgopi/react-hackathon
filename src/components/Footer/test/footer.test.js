import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('APP', () => {
  test('Footer component', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2022 - Carbon Calc. All rights reserved/i)).toBeInTheDocument();
  });
 
 });
