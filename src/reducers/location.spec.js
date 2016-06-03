import { updateLocation } from '../actions/location';
import { expect } from 'chai';
import location from './location';

const initialState = {};
const latitude = 51.5194880;
const longitude = -0.1063030;

describe('Location Reducer', () => {
  it('should update the location', () => {
    expect(location(initialState, updateLocation(latitude, longitude)).latitude).to.equal(latitude);
    expect(location(initialState, updateLocation(latitude, longitude)).longitude).to.equal(longitude);
  });
});
