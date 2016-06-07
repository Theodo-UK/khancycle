import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: '***REMOVED***',
  authDomain: 'project-908306213235132709.firebaseapp.com',
  databaseURL: 'https://project-908306213235132709.firebaseio.com',
  storageBucket: 'project-908306213235132709.appspot.com',
};
const database = firebase.initializeApp(config).database();
const bikeReportsRef = database.ref('brokenBikes');

export function reportBrokenBikes(stationId, number) {
  return bikeReportsRef.child(stationId).set(number);
}
