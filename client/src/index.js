import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import React from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Spinner from './components/commons/Spinner';
import MainContainer from './components/MainContainer';
import { GET_CURRENT_USER } from './queries/userQueries';
import * as serviceWorker from './serviceWorker';
import setGlobalStyles from './styles/globals';
import palette from './styles/palette';

setGlobalStyles();

const initialState = {
  getCurrentUser: {
    typeName: 'getCurrentUser',
    user: null
  }
};

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  defaults: initialState
});

const theme = createMuiTheme(palette);


const client = new ApolloClient({
  link: ApolloLink.from([stateLink, new HttpLink({ uri: 'http://localhost:5000/graphql' })]),
  cache,
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

const Root = () => (
  <Query query={GET_CURRENT_USER}>
    {({ data, loading }) => {
      if (data.getCurrentUser) {
      }
      return (
        loading ? <Spinner/>
          : <MainContainer/>
      );
    }}
  </Query>
);


const renderApp = () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Root/>
        </BrowserRouter>
      </MuiThemeProvider>
    </ApolloProvider>,
    document.getElementById('root')
  )
  ;
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
renderApp();
