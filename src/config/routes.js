import React from 'react';
import { Provider } from 'react-redux';
import { Scene, Router, Actions } from 'react-native-router-flux';
import * as StationsContainer from '../containers/Stations';
import * as StationDetail from '../containers/StationDetail';
import * as About from '../containers/About';


export default (store) => (
  <Provider store={store}>
    <Router>
      <Scene key="root">
        <Scene key={'stations'} component={StationsContainer.StationsContainer} title={'KhanCycle'}
          rightTitle={'About'} onRight={() => Actions.about()} initial />
        <Scene key={'stationDetail'} component={StationDetail.StationDetail} title={'Station Detail'} />
        <Scene key={'about'} component={About.About} title={'About'} />
      </Scene>
    </Router>
  </Provider>
);
