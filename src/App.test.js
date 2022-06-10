import { render, screen } from '@testing-library/react';
import App from './App';
import {
  MemoryRouter
} from "react-router-dom";
import DataStoreProvider from './components/Store/DataStore.js'
import 'jest-canvas-mock';

jest.mock('react-chartjs-2', () => ({
  Doughnut: () => null, // add any additional chart types here
  Line: () => null
}));

describe('APP', () => {

  test('Full App rendering/navigating', async()=>{
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,)

    expect(screen.queryAllByText(/CARBON CALC/i)).toBeTruthy();
    expect(screen.getByTestId('home_element')).toBeTruthy();
  })

  test('404 not found rendering/navigating', async()=>{
    render(
      <MemoryRouter initialEntries={['/someurl']}>
        <App />
      </MemoryRouter>,)
      expect(screen.getByText(/Error 404/i)).toBeInTheDocument()
  })

  test('Home rendering/navigating', async()=>{
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,)
    expect(screen.getByTestId('home_element')).toBeTruthy();
  })

  test('Dashboard rendering/navigating', async()=>{
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <DataStoreProvider>
          <App />
        </DataStoreProvider>
        </MemoryRouter>
        ,)
        expect(screen.getByText(/Household/i)).toBeInTheDocument()
  })
 
 });
