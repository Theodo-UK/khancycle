import React from 'react';
import { Provider } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
import * as StationList from '../containers/StationList';
import * as StationDetail from '../containers/StationDetail';


export default (store) => (
  <Provider store={store}>
    <Router>
      <Scene key="root">
        <Scene key={'stationList'} component={StationList.StationList} title={'KhanCycle'} initial />
        <Scene key={'stationDetail'} component={StationDetail.StationDetail} title={'Station Detail'} />
      </Scene>
    </Router>
  </Provider>
);
