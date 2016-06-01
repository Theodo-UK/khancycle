import React, { Component } from 'react';
import StationList from '../StationList/StationList';

const stationListElement = function () {
  return <StationList />;
};

class Home extends Component {
  render() {
    return stationListElement();
  }
}

export default Home;
