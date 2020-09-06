import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';

// eslint-disable-next-line no-unused-vars
import firebase from './utils/firebase';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
