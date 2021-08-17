import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import balanceReducer from './store/balanceReducer';
import loanReducer from './store/loanReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    balanceReducer,
    loanReducer,
  }),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
