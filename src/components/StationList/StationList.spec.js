import React, { ListView } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { List } from 'immutable';

import StationList from './StationList';

// test station objects
const A = { name: 'A', latitude: 1, longitude: 1 };
const B = { name: 'B', latitude: 2, longitude: 2 };
const C = { name: 'C', latitude: 3, longitude: 3 };
const D = { name: 'D', latitude: 4, longitude: 4 };
const E = { name: 'E', latitude: 5, longitude: 5 };
const F = { name: 'F', latitude: 6, longitude: 6 };

// test station and location data
let nearestStationsActionData;
const nextProps = {
  stations: [F, D, C, A, B, E],
  location: {
    latitude: 0,
    longitude: 0,
    isUpToDate: true,
  },
};

beforeEach(() => {
  nearestStationsActionData = [];
});

describe('<StationList />', () => {
  it('should contain a list view', () => {
    const wrapper = shallow(<StationList />);
    expect(wrapper.find(ListView)).to.have.length(1);
  });

  it('should dispatch the nearestStationsUpdated action', () => {
    const stationList = new StationList();
    stationList.props = {
      station: [],
      location: {},
      nearestStationsUpdated(data) { nearestStationsActionData = data; },
    };
    stationList.componentWillReceiveProps(nextProps);
    // The expected values here are those calculated by the 'geolib' library
    // for the latitudes and longitudes given for the test station objects
    expect(nearestStationsActionData).to.eql([A, B, C, D, E]);
  });

  it('should not dispatch the nearestStationsUpdated action if new location is outdated', () => {
    let nearestStationsCalled = false;
    const newProps = { location: { latitude: 3, longitude: 4, isUpToDate: false } };
    const stationList = new StationList();
    stationList.props = {
      station: [],
      location: { latitude: 1, longitude: 2, isUpToDate: true },
      nearestStationsUpdated() { nearestStationsCalled = true; },
    };
    stationList.componentWillReceiveProps(newProps);
    // The expected values here are those calculated by the 'geolib' library
    // for the latitudes and longitudes given for the test station objects
    expect(nearestStationsCalled).to.eql(false);
  });

  it('should update the list view with new nearest stations', () => {
    const stationList = new StationList();
    stationList.props = { };
    stationList.componentWillReceiveProps({ nearestStations: new List([A, B]), location: {} });
    expect(stationList.state.dataSource._dataBlob).to.eql([A, B]);
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
