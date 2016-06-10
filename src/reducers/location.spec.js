import { updateLocation } from '../actions/location';
import { expect } from 'chai';
import location from './location';

const initialState = {};
const latitude = 51.5194880;
const longitude = -0.1063030;
const isUpToDate = true;

describe('Location Reducer', () => {
  it('should update the location', () => {
    const newState = location(initialState, updateLocation(latitude, longitude, isUpToDate));

    expect(newState.latitude).to.equal(latitude);
    expect(newState.longitude).to.equal(longitude);
    expect(newState.isUpToDate).to.equal(isUpToDate);
  });
});
