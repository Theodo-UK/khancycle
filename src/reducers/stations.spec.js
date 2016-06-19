import { updateStations } from '../actions/stations';
import { expect } from 'chai';
import stations from './stations';

const initialState = {};
const testResponse = {
  network: {
    stations: [
      { name: '0001 - Station 01' },
      { name: '0002 - Station 02' },
      { name: '0003 - Station 03' },
      { name: '0004 - Station 04' },
      { name: '0005 - Station 05' },
    ],
  },
};

describe('Stations Reducer', () => {
  it('should update the stations list', () => {
    expect(stations(initialState, updateStations(testResponse.network.stations)).length).to.equal(5);
  });
});
