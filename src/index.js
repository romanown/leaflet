import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import './index.css';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { getDataById } from 'store/api/dataById';
import { reducer } from 'store/reducers/reducer';

const sagaMiddleware = createSagaMiddleware({
  context: {
    getDataById,
  },
});
const store = createStore(
  combineReducers({
    app: reducer,
  }),
  compose(applyMiddleware(sagaMiddleware), applyMiddleware(thunk)),
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
