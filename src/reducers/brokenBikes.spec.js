import { brokenBikeReportsUpdated } from '../actions/brokenBikes';
import { expect } from 'chai';
import brokenBikes from './brokenBikes';

const data = {
  uuid1234: { number: 3 },
  uuid6789: { number: 11 },
};

describe('brokenBikes reducer', () => {
  it('should put the broken bike reports from firebase into the store', () => {
    const newState = brokenBikes(undefined, brokenBikeReportsUpdated(data));
    expect(newState.getIn(['brokenBikeReports', 'uuid1234', 'number'])).to.equal(3);
    expect(newState.getIn(['brokenBikeReports', 'uuid6789', 'number'])).to.equal(11);
  });
});
