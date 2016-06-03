import React, { ListView } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import StationList from './StationList';

// test station and location data
const nextProps = {
  stations: [
      { longitude: 6, latitude: 6 },
      { longitude: 2, latitude: 2 },
      { longitude: 5, latitude: 5 },
      { longitude: 3, latitude: 3 },
      { longitude: 1, latitude: 1 },
      { longitude: 4, latitude: 4 },
  ],
  location: {
    latitude: 0,
    longitude: 0,
  },
};

describe('<StationList />', () => {
  it('should contain a list view', () => {
    const wrapper = shallow(<StationList />);
    expect(wrapper.find(ListView)).to.have.length(1);
  });

  it('should determine the five nearest stations', () => {
    const stationList = new StationList();
    stationList.props = { station: [], location: {} };
    stationList.componentWillReceiveProps(nextProps);
    expect(stationList.closestStations.length).to.equal(5);
    expect(stationList.closestDistances).to.eql([2, 8, 18, 32, 50]);
  });
});
