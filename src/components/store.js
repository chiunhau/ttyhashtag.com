import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import appReducer from './App/reducer';

const createStoreWithMiddleware = applyMiddleware(
  ReduxThunk
)(createStore);

const appStore = createStoreWithMiddleware(appReducer, typeof(window) !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default appStore;
