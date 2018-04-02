import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import './index.scss';
import App from './App';
import appReducer from './App/reducer';
import appStore from './store';

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>
  , document.getElementById('root'));
