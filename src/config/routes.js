import React from 'react';
import { Provider } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
import * as StationsContainer from '../containers/Stations';
import * as StationDetail from '../containers/StationDetail';


export default (store) => (
  <Provider store={store}>
    <Router>
      <Scene key="root">
        <Scene key={'stations'} component={StationsContainer.StationsContainer} title={'KhanCycle'} initial />
        <Scene key={'stationDetail'} component={StationDetail.StationDetail} title={'Station Detail'} />
      </Scene>
    </Router>
  </Provider>
);
