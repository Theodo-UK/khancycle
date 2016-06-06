import { combineReducers } from 'redux';
import stations from './stations';
import location from './location';
import brokenBikes from './brokenBikes';

const rootReducer = combineReducers({ stations, location, brokenBikes });

export default rootReducer;
