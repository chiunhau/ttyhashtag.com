import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import './index.scss';
import App from './App';
import appReducer from './App/reducer';

const createStoreWithMiddleware = applyMiddleware(
  ReduxThunk
)(createStore);

const appStore = createStoreWithMiddleware(appReducer, typeof(window) !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>
  , document.getElementById('root'));
