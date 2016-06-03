import { combineReducers } from 'redux';
import stations from './stations';
import location from './location';

const rootReducer = combineReducers({ stations, location });

export default rootReducer;
