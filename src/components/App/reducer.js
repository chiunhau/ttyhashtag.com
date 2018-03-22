import { combineReducers } from 'redux';
import fetchReducer from '../fetchReducer';
import infobox from '../InfoBox/reducer';

export default combineReducers({
  fetchedData: fetchReducer,
  infobox,
});
