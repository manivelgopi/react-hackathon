import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import HouseHoldContainer from '../HouseHoldContainer';
import DataStoreProvider from '../../Store/DataStore';

describe('HouseHoldContainer', () => {
  afterAll(cleanup);

  test('HouseHoldContainer component', () => {
    const result  = {current:'HouseDataDispatch'}
    render(
        <DataStoreProvider>
          <HouseHoldContainer parentRef={result} />
        </DataStoreProvider>
        ,)
        expect(screen.getByText(/Household/i)).toBeInTheDocument()
  });

  test('HouseHoldContainer Form elements', () => {
    const result  = {current:'HouseDataDispatch'}
    render(
        <DataStoreProvider>
          <HouseHoldContainer parentRef={result} />
        </DataStoreProvider>
        ,)
        expect(screen.getByLabelText('Electricity', {selector: 'input'})).toBeInTheDocument()
        expect(screen.getByLabelText('Natural gas', {selector: 'input'})).toBeInTheDocument()
        expect(screen.getByLabelText('Heating oil', {selector: 'input'})).toBeInTheDocument()
        expect(screen.getByLabelText('Coal', {selector: 'input'})).toBeInTheDocument()
        expect(screen.getByLabelText('LPG', {selector: 'input'})).toBeInTheDocument()
        expect(screen.getByLabelText('Propane', {selector: 'input'})).toBeInTheDocument()
        expect(screen.getByLabelText('Wooden pellets', {selector: 'input'})).toBeInTheDocument()
  });

  test('Electricity input values', async () => {
    const result  = {current:'HouseDataDispatch'}
    const {unmount} =  render(
      <DataStoreProvider>
        <HouseHoldContainer parentRef={result} />
      </DataStoreProvider>
      ,)
     
    const ele = screen.getByLabelText('Electricity', {selector: 'input'})
    fireEvent.change(ele, {target: {value: 23}})
    expect(ele).toHaveAttribute('name', 'electricity')
    expect(Number(ele.value)).toBe(23)
    expect(ele.value).toMatch(/^\d*\.?\d*$/)
    act( () => {
      expect(result.current()).toBeTruthy()
    });
    
    fireEvent.change(ele, {target: {value:"bad"}})
    expect(ele.value).toBe("bad")
    expect(ele.value).not.toMatch(/^\d*\.?\d*$/)
    act( () => {
      expect(result.current()).toBeFalsy()
    });

  })

  test('Natural gas', async () => {
    const result  = {current:'HouseDataDispatch'}
    render(
      <DataStoreProvider>
        <HouseHoldContainer parentRef={result} />
      </DataStoreProvider>
      ,)
      
    const gas = screen.getByLabelText('Natural gas', {selector: 'input'})
    fireEvent.change(gas, {target: {value: 23}})
    expect(gas).toHaveAttribute('name', 'naturalGas')
    expect(Number(gas.value)).toBe(23)
    expect(gas.value).toMatch(/^\d*\.?\d*$/)
    act( () => {
      expect(result.current()).toBeTruthy()
    });
    
    fireEvent.change(gas, {target: {value:"bad"}});
    expect(gas.value).toBe("bad");
    expect(gas.value).not.toMatch(/^\d*\.?\d*$/)
    act( () => {
      expect(result.current()).toBeFalsy()
    });
    
  })

  test('Heating oil input values', async () => {
    const result  = {current:'HouseDataDispatch'}
    render(
      <DataStoreProvider>
        <HouseHoldContainer parentRef={result} />
      </DataStoreProvider>
      ,)

    const heating = screen.getByLabelText('Heating oil', {selector: 'input'})
    fireEvent.change(heating, {target: {value: 23}})
    expect(heating).toHaveAttribute('name', 'heatingOil')
    expect(Number(heating.value)).toBe(23)
    expect(heating.value).toMatch(/^\d*\.?\d*$/)
    act( () => {
      expect(result.current()).toBeTruthy()
    });

    fireEvent.change(heating, {target: {value:'bad'}})
    expect(heating.value).toBe('bad')
    expect(heating.value).not.toMatch(/^\d*\.?\d*$/)
    act( () => {
      expect(result.current()).toBeFalsy()
    });
    
  })

  test('Coal input values', async () => {
    const result  = {current:'HouseDataDispatch'}
    render(
      <DataStoreProvider>
        <HouseHoldContainer parentRef={result} />
      </DataStoreProvider>
      ,)
    const Coal = screen.getByLabelText('Coal', {selector: 'input'})
    fireEvent.change(Coal, {target: {value: 23}})
    expect(Coal).toHaveAttribute('name', 'coal')
    expect(Number(Coal.value)).toBe(23)
    expect(Coal.value).toMatch(/^\d*\.?\d*$/)
    act( () => {
      expect(result.current()).toBeTruthy()
    });

    fireEvent.change(Coal, {target: {value:'bad'}})
    expect(Coal.value).toBe('bad')
    expect(Coal.value).not.toMatch(/^\d*\.?\d*$/)
    act( () => {
      expect(result.current()).toBeFalsy()
    });

  })

  test('LPG input values', async () => {
    const result  = {current:'HouseDataDispatch'}
    render(
      <DataStoreProvider>
        <HouseHoldContainer parentRef={result} />
      </DataStoreProvider>
      ,)
    const LPG = screen.getByLabelText('LPG', {selector: 'input'})
    fireEvent.change(LPG, {target: {value: 23}})
    expect(LPG).toHaveAttribute('name', 'lpg')
    expect(Number(LPG.value)).toBe(23)
    expect(LPG.value).toMatch(/^\d*\.?\d*$/)
    act( () => {
      expect(result.current()).toBeTruthy()
    });

    fireEvent.change(LPG, {target: {value:'bad'}})
    expect(LPG.value).toBe('bad')
    expect(LPG.value).not.toMatch(/^\d*\.?\d*$/)
    act( () => {
      expect(result.current()).toBeFalsy()
    });
  })
    
  test('Propane input values', async () => {
    const result  = {current:'HouseDataDispatch'}
    render(
      <DataStoreProvider>
        <HouseHoldContainer parentRef={result} />
      </DataStoreProvider>
      ,)
      const propane = screen.getByLabelText('Propane', {selector: 'input'})
  fireEvent.change(propane, {target: {value: 23}})
  expect(propane).toHaveAttribute('name', 'propane')
  expect(Number(propane.value)).toBe(23)
  expect(propane.value).toMatch(/^\d*\.?\d*$/)
  act( () => {
    expect(result.current()).toBeTruthy()
  });

  fireEvent.change(propane, {target: {value:'bad'}})
    expect(propane.value).toBe('bad')
    expect(propane.value).not.toMatch(/^\d*\.?\d*$/)
    act( () => {
      expect(result.current()).toBeFalsy()
    });
  })

  test('Wooden input values', async () => {
    const result  = {current:'HouseDataDispatch'}
    render(
    <DataStoreProvider>
      <HouseHoldContainer parentRef={result} />
    </DataStoreProvider>
    ,)
    const wood = screen.getByLabelText('Wooden pellets', {selector: 'input'})
    fireEvent.change(wood, {target: {value: 23}})
    expect(wood).toHaveAttribute('name', 'wood')
    expect(Number(wood.value)).toBe(23)
    expect(wood.value).toMatch(/^\d*\.?\d*$/)
    act( () => {
      expect(result.current()).toBeTruthy()
    });

    fireEvent.change(wood, {target: {value:'bad'}})
    expect(wood.value).toBe('bad')
    expect(wood.value).not.toMatch(/^\d*\.?\d*$/)
    act( () => {
      expect(result.current()).toBeFalsy()
    });
  })
 
 });