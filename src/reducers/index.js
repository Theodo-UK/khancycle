import { combineReducers } from 'redux';
import stations from './stations';
import nearestStations from './nearestStations';
import location from './location';
import brokenBikes from './brokenBikes';

const rootReducer = combineReducers({ stations, nearestStations, location, brokenBikes });

export default rootReducer;
