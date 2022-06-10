import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Dashboard from '../Dashboard';
import DataStoreProvider from '../../Store/DataStore';
import 'jest-canvas-mock';

jest.mock('react-chartjs-2', () => ({
  Doughnut: () => null, // add any additional chart types here
  Line: () => null
}));

describe('Dashboard', () => {
  afterAll(cleanup);

  test('Dashboard component', () => {
    const result  = {current:'HouseDataDispatch'}
    render(
        <DataStoreProvider>
          <Dashboard parentRef={result} />
        </DataStoreProvider>
        ,)
        expect(screen.getByText(/Household/i)).toBeInTheDocument()
  });

  test('Next button event', () => {
    const result  = {current:'HouseDataDispatch'}
    render(
        <DataStoreProvider>
          <Dashboard parentRef={result} />
        </DataStoreProvider>
        ,)
        const previous = screen.getByRole('button', { name: 'Previous' })
        const next = screen.getByRole('button', { name: 'Next' })
        // Next to flight page
        fireEvent.click(next)
        fireEvent.click(previous)

        // Next to flight page
        fireEvent.click(next)
        // Next to Car page
        fireEvent.click(next)
        // Next to Bus page
        fireEvent.click(next)
        // Next to Bus page
        fireEvent.click(next)

        
        const submit = screen.getByRole('button', { name: 'Calculate Now' }) 
        fireEvent.click(submit)
        // act( () => {
          
        //   expect(result.current()).toBeCalled()
        // });
        

  });




 });
