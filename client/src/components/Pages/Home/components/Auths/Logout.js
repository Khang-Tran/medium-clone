import Button from '@material-ui/core/Button';
import React from 'react';
import { ApolloConsumer } from 'react-apollo';
import { withRouter } from 'react-router-dom';

const handleSignout = (client, history) => {
  localStorage.removeItem('token');
  client.resetStore();
  history.push('/');
};

const Logout = ({ history }) => (
  <ApolloConsumer>
    {client => {
      return (
        <Button variant='text' color='primary' onClick={() => handleSignout(client, history)}>
          Log out
        </Button>
      );
    }}
  </ApolloConsumer>
);

export default withRouter(Logout);
