import Button from '@material-ui/core/Button/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import { LoginButton } from '../styles';

const UnAuthNav = () => (
  <React.Fragment>
    <LoginButton variant='text' color='primary'>
      <Link to='/login'>Sign in</Link>
    </LoginButton>
    <Button variant='outlined' color='primary'>
      <Link to='/register'>Get started</Link>
    </Button>
  </React.Fragment>
);

export default UnAuthNav;
