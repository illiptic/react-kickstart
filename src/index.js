import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './app/rootReducer'
import App from './app/App';

const store = (window.devToolsExtension ?
  window.devToolsExtension()(createStore) :
  createStore)(rootReducer, {});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
