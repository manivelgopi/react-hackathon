import { render, screen, fireEvent } from '@testing-library/react';
import ResultContainer from '../ResultContainer';
import DataStoreProvider from '../../Store/DataStore';
import axios from 'axios'
import 'jest-canvas-mock';

jest.mock('axios');
jest.mock('react-chartjs-2', () => ({
  Doughnut: () => null, // add any additional chart types here
  Line: () => null
}));

describe('ResultContainer', () => {
  const result  = {current:{}}
  test('ResultContainer component', () => {
    render(
        <DataStoreProvider>
          <ResultContainer parentRef={result} />
        </DataStoreProvider>
        ,)
        expect(screen.getByText(/loading../i)).toBeInTheDocument()
  });

  test('should fetch footprint', () => {
    const footprint = [{
        "carbonFootPrint": 29.723070604450417
    }];
    const resp = {data: footprint};
    axios.post.mockResolvedValue(resp);
    result.current()
    expect(axios.post).toBeCalled();
  });
 
 });
