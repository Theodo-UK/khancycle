import React, { ListView } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import StationList from './StationList';

// test station objects
const A = { name: 'A', latitude: 1, longitude: 1 };
const B = { name: 'B', latitude: 2, longitude: 2 };
const C = { name: 'C', latitude: 3, longitude: 3 };
const D = { name: 'D', latitude: 4, longitude: 4 };
const E = { name: 'E', latitude: 5, longitude: 5 };
const F = { name: 'F', latitude: 6, longitude: 6 };

// test station and location data
const nextProps = {
  stations: [F, D, C, A, B, E],
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
    expect(stationList.closestDistances).to.eql([2, 8, 18, 32, 50]);
  });

  it('should correctly update the list of nearest stations', () => {
    const stationList = new StationList();

    // Add a station to an empty list
    stationList.closestStations = [];
    stationList.closestDistances = [];
    stationList.updateClosestStations(A, 1);
    expect(stationList.closestStations).to.eql([A]);
    expect(stationList.closestDistances).to.eql([1]);

    // Add a station to the end of the list
    stationList.closestStations = [A, B, C];
    stationList.closestDistances = [1, 2, 3];
    stationList.updateClosestStations(D, 4);
    expect(stationList.closestStations).to.eql([A, B, C, D]);
    expect(stationList.closestDistances).to.eql([1, 2, 3, 4]);

    // Add a station to the middle of the list
    stationList.closestStations = [A, B, C, E, F];
    stationList.closestDistances = [1, 2, 3, 5, 6];
    stationList.updateClosestStations(D, 4);
    expect(stationList.closestStations).to.eql([A, B, C, D, E]);
    expect(stationList.closestDistances).to.eql([1, 2, 3, 4, 5]);

    // Add a station to the beginning of the list
    stationList.closestStations = [B, C, D, E, F];
    stationList.closestDistances = [2, 3, 4, 5, 6];
    stationList.updateClosestStations(A, 1);
    expect(stationList.closestStations).to.eql([A, B, C, D, E]);
    expect(stationList.closestDistances).to.eql([1, 2, 3, 4, 5]);
  });
});
