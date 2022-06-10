import { render, screen, fireEvent } from '@testing-library/react';
import CarContainer from '../CarContainer';
import DataStoreProvider from '../../Store/DataStore';

describe('CarContainer', () => {
  const result  = {current:{}}

  test('CarContainer component', () => {
    render(
        <DataStoreProvider>
          <CarContainer parentRef={result} />
        </DataStoreProvider>
        ,)
        expect(screen.findAllByText(/Car/i)).toBeTruthy()
  });

  test('CarContainer component', () => {
    render(
        <DataStoreProvider>
          <CarContainer parentRef={result} />
        </DataStoreProvider>
        ,)
        expect(screen.getByLabelText('Mileage', {selector: 'input'})).toBeInTheDocument()
  });
 
 
 });
