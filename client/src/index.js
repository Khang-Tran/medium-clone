import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import MainContainer from './components/MainContainer';
import * as serviceWorker from './serviceWorker';
import configuredStore from './store';
import setGlobalStyles from './styles/globals';

setGlobalStyles();

const renderApp = () => {
  const initialState = {};
  const store = configuredStore(initialState);

  ReactDOM.render(
    <Provider store={store}>
      <MainContainer />
    </Provider>,
    document.getElementById('root'),
  );
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
renderApp();
