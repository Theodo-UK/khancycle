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

// const brokenBikesRef = Firebase.database().ref('brokenBikes');
const reportBrokenBikes = (stationId, number) => {
  bikeReportsRef.child(stationId).set(number)
    .then(() => console.warn('success'))
    .catch(err => console.warn(`error: ${err}`));
};

export const middleware = () => next => action => {
  if (action.type === 'REPORT_BROKEN') {
    reportBrokenBikes(action.stationId, action.number);
  }
  return next(action);
};
