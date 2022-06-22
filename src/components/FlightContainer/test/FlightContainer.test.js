import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import FlightContainer from '../FlightContainer';
import DataStoreProvider from '../../Store/DataStore';

describe('FlightContainer', () => {
  afterAll(cleanup);

  test('FlightContainer component', () => {
    const result  = {current:'HouseDataDispatch'}
    render(
        <DataStoreProvider>
          <FlightContainer parentRef={result} />
        </DataStoreProvider>
        ,)
        expect(screen.getByText(/Flights/i)).toBeInTheDocument()
  });

  test('FlightContainer component', () => {
    const result  = {current:'HouseDataDispatch'}
    render(
        <DataStoreProvider>
          <FlightContainer parentRef={result} />
        </DataStoreProvider>
        ,)
        expect(screen.getByLabelText('Return trip', {selector: 'input'})).toBeInTheDocument()
        expect(screen.getByLabelText('One-way flight', {selector: 'input'})).toBeInTheDocument()
        expect(screen.getByLabelText('From', {selector: 'select'})).toBeInTheDocument()
        expect(screen.getByLabelText('To', {selector: 'select'})).toBeInTheDocument()
        expect(screen.getByLabelText('Via (optional)', {selector: 'select'})).toBeInTheDocument()
        expect(screen.getByLabelText('Class', {selector: 'select'})).toBeInTheDocument()
        expect(screen.getByLabelText('Trips', {selector: 'input'})).toBeInTheDocument()
  });

  test('Flight Location input values', async () => {
    const result  = {current:'HouseDataDispatch'}
    render(
      <DataStoreProvider>
        <FlightContainer parentRef={result} />
      </DataStoreProvider>
      ,)

    const fromLocation = screen.getByLabelText('From', {selector: 'select'})
    fireEvent.change(fromLocation, {target: {value: ""}})
    expect(fromLocation).toHaveAttribute('name', 'fromCity')
    expect(fromLocation.value).toBe("")
    // act for useState change
    act( () => {
      expect(result.current()).toBeTruthy()
    });
     
    fireEvent.change(fromLocation, {target: {value: "FRA"}})
    expect(fromLocation).toHaveAttribute('name', 'fromCity')
    expect(fromLocation.value).toBe("FRA")
    expect(result.current()).toBeFalsy()
    
    const toLocation = screen.getByLabelText('To', {selector: 'select'})
    fireEvent.change(toLocation, {target: {value: "CDG"}})
    expect(toLocation).toHaveAttribute('name', 'toCity')
    expect(toLocation.value).toBe("CDG")
    expect(result.current()).toBeFalsy()

    const classType = screen.getByLabelText('Class', {selector: 'select'})
    fireEvent.change(classType, {target: {value: "Economy class"}})
    expect(classType).toHaveAttribute('name', 'classType')
    expect(classType.value).toBe("Economy class")
    expect(result.current()).toBeFalsy()

    const trips = screen.getByLabelText('Trips', {selector: 'input'})
    fireEvent.change(trips, {target: {value: 1}})
    expect(trips).toHaveAttribute('name', 'trips')
    expect(Number(trips.value)).toBe(1)
    // act for useState change
    act( () => {
      expect(result.current()).toBeTruthy()
    });

    fireEvent.change(trips, {target: {value:"bad"}});
    expect(trips.value).toBe("bad");
    expect(trips.value).not.toMatch(/^\d*\.?\d*$/)
    expect(result.current()).toBeFalsy()
  })
 
 });
