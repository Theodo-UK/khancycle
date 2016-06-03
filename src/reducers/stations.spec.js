import { updateStations } from '../actions/stations';
import { expect } from 'chai';
import stations from './stations';

const initialState = {};
const testResponse = {
  network: {
    stations: [
      { extra: { name: 'Station 01' } },
      { extra: { name: 'Station 02' } },
      { extra: { name: 'Station 03' } },
      { extra: { name: 'Station 04' } },
      { extra: { name: 'Station 05' } },
    ],
  },
};

describe('Stations Reducer', () => {
  it('should update the stations list', () => {
    expect(stations(initialState, updateStations(testResponse.network.stations)).length).to.equal(5);
  });
});
