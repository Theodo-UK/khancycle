import firebase from 'firebase/app';
import 'firebase/database';
import { brokenBikeReportsUpdated } from '../actions/brokenBikes';
import DeviceInfo from 'react-native-device-info';

const config = {
  apiKey: 'XXX',
  authDomain: 'project-908306213235132709.firebaseapp.com',
  databaseURL: 'https://project-908306213235132709.firebaseio.com',
  storageBucket: 'project-908306213235132709.appspot.com',
};
const database = firebase.initializeApp(config).database();
const bikeReportsRef = database.ref('brokenBikes');

export function reportBrokenBikes(stationId, number) {
  return bikeReportsRef.child(stationId).push({
    timestamp: (new Date()).toISOString(),
    number,
    deviceInfo: {
      deviceUniqueId: DeviceInfo.getUniqueID(),
      deviceManufacturer: DeviceInfo.getManufacturer(),
      deviceModel: DeviceInfo.getModel(),
      deviceId: DeviceInfo.getDeviceId(),
      systemName: DeviceInfo.getSystemName(),
      systemVersion: DeviceInfo.getSystemVersion(),
      bundleId: DeviceInfo.getBundleId(),
      buildNumber: DeviceInfo.getBuildNumber(),
      appVersion: DeviceInfo.getVersion(),
      appVersionReadable: DeviceInfo.getReadableVersion(),
      deviceName: DeviceInfo.getDeviceName(),
      userAgent: DeviceInfo.getUserAgent(),
      deviceLocale: DeviceInfo.getDeviceLocale(),
      deviceCountry: DeviceInfo.getDeviceCountry(),
    },
  });
}

export function syncBrokenBikeReports(store) {
  bikeReportsRef.on('value', (data) => {
    store.dispatch(brokenBikeReportsUpdated(data.val()));
  });
}
