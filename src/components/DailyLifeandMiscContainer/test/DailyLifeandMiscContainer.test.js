import { render, screen, fireEvent } from '@testing-library/react';
import DailyLifeandMiscContainer from '../DailyLifeandMiscContainer';
import DataStoreProvider from '../../Store/DataStore';

describe('DailyLifeandMiscContainer', () => {
  const result  = {current:{}}

  test('DailyLifeandMiscContainer component', () => {
    render(
        <DataStoreProvider>
          <DailyLifeandMiscContainer parentRef={result} />
        </DataStoreProvider>
        ,)
        expect(screen.findAllByText(/Daily Life/i)).toBeTruthy()
  });
 
 });
