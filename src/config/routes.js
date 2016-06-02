import React from 'react';
import { Provider } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
import * as StationList from '../containers/StationList';


export default (store) => (
  <Provider store={store}>
    <Router>
      <Scene key="root">
        <Scene key={'stationList'} component={StationList.StationList} title={'KhanCycle'} />
      </Scene>
    </Router>
  </Provider>
);
