import firebase from 'firebase/app';
import 'firebase/database';
import { brokenBikeReportsUpdated } from '../actions/brokenBikes';

const config = {
  apiKey: '***REMOVED***',
  authDomain: 'project-908306213235132709.firebaseapp.com',
  databaseURL: 'https://project-908306213235132709.firebaseio.com',
  storageBucket: 'project-908306213235132709.appspot.com',
};
const database = firebase.initializeApp(config).database();
const bikeReportsRef = database.ref('brokenBikes');

export function reportBrokenBikes(stationId, number) {
  return bikeReportsRef.child(stationId).set({
    timestamp: (new Date()).toISOString(),
    number,
  });
}

export function syncBrokenBikeReports(store) {
  bikeReportsRef.on('value', (data) => {
    store.dispatch(brokenBikeReportsUpdated(data.val()));
  });
}
