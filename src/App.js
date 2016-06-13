import { createStore, applyMiddleware } from 'redux';
import { Component } from 'react';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';
import routes from './config/routes';
import { syncBrokenBikeReports } from './services/firebase';

// Create the default state and store
const defaultState = { stations: [], location: {} };
const store = applyMiddleware(thunk)(createStore)(rootReducer, defaultState);

class App extends Component {
  constructor(props) {
    super(props);
    syncBrokenBikeReports(store);
  }
  render() {
    var DeviceInfo = require('react-native-device-info');
    console.warn("Device Unique ID", DeviceInfo.getUniqueID());  // e.g. FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9
    // * note this is IDFV on iOS so it will change if all apps from the current apps vendor have been previously uninstalled
    console.warn("Device Manufacturer", DeviceInfo.getManufacturer());  // e.g. Apple
    console.warn("Device Model", DeviceInfo.getModel());  // e.g. iPhone 6
    console.warn("Device ID", DeviceInfo.getDeviceId());  // e.g. iPhone7,2 / or the board on Android e.g. goldfish
    console.warn("Device Name", DeviceInfo.getSystemName());  // e.g. iPhone OS
    console.warn("Device Version", DeviceInfo.getSystemVersion());  // e.g. 9.0
    console.warn("Bundle Id", DeviceInfo.getBundleId());  // e.g. com.learnium.mobile
    console.warn("Build Number", DeviceInfo.getBuildNumber());  // e.g. 89
    console.warn("App Version", DeviceInfo.getVersion());  // e.g. 1.1.0
    console.warn("App Version (Readable)", DeviceInfo.getReadableVersion());  // e.g. 1.1.0.89
    console.warn("Device Name", DeviceInfo.getDeviceName());  // e.g. Becca's iPhone 6
    console.warn("User Agent", DeviceInfo.getUserAgent()); // e.g. Dalvik/2.1.0 (Linux; U; Android 5.1; Google Nexus 4 - 5.1.0 - API 22 - 768x1280 Build/LMY47D)
    console.warn("Device Locale", DeviceInfo.getDeviceLocale()); // e.g en-US
    console.warn("Device Country", DeviceInfo.getDeviceCountry()); // e.g US
    return routes(store);
  }
}

export default App;
