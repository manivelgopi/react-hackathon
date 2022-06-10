import { render, screen, fireEvent } from '@testing-library/react';
import BusContainer from '../BusContainer';
import DataStoreProvider from '../../Store/DataStore';

describe('BusContainer', () => {
  const result  = {current:{}}

  test('BusContainer component', () => {
    render(
        <DataStoreProvider>
          <BusContainer parentRef={result} />
        </DataStoreProvider>
        ,)
        expect(screen.getByText(/Bus and Train/i)).toBeInTheDocument()
  });

  test('BusContainer component', () => {
    render(
        <DataStoreProvider>
          <BusContainer parentRef={result} />
        </DataStoreProvider>
        ,)
        expect(screen.getByLabelText('Bus', {selector: 'input'})).toBeInTheDocument()
  });
 
 
 });
