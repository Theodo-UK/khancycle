import React from 'react';
import { Provider } from 'react-redux';
import { Scene, Router, Actions } from 'react-native-router-flux';
import * as StationsContainer from '../containers/Stations';
import * as StationDetailContainer from '../containers/StationDetail';
import * as AboutContainer from '../containers/About';


export default (store) => (
  <Provider store={store}>
    <Router>
      <Scene key="root">
        <Scene
          key={'stations'}
          component={StationsContainer.StationsContainer}
          title={'KhanCycle'}
          rightTitle={'?'}
          onRight={() => Actions.about()}
          initial
        />
        <Scene key={'stationDetail'} component={StationDetailContainer.StationDetailContainer} title={'Station Detail'} />
        <Scene key={'about'} component={AboutContainer.AboutContainer} title={'About'} />
      </Scene>
    </Router>
  </Provider>
);
