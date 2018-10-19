import Button from '@material-ui/core/Button/Button';
import { LoginButton } from 'components/Pages/Home/components/NavigationBar/styles';
import React from 'react';
import { Link } from 'react-router-dom';

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
