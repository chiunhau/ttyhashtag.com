import { combineReducers } from 'redux';
import fetchReducer from '../fetchReducer';
import infobox from '../InfoBox/reducer';
import canvas from '../Canvas/reducer';

export default combineReducers({
  fetchedData: fetchReducer,
  infobox,
  canvas
});
