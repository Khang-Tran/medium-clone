import ApolloClient from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import MainContainer from './components/MainContainer';
import * as serviceWorker from './serviceWorker';
import setGlobalStyles from './styles/globals';

setGlobalStyles();

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  fetchOptions: {
    credentials: 'include'
  },
  request: operation => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token
      }
    });
  },
  onError: ({ networkError }) => {
    if (networkError) {
      if (networkError.statusCode === 401) {
        localStorage.removeItem('token');
      }
    }
  }
});


const renderApp = () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <MainContainer/>
    </ApolloProvider>,
    document.getElementById('root'),
  );
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
renderApp();
