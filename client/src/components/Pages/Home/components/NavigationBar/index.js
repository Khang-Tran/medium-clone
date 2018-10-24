import AppBar from '@material-ui/core/AppBar/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid/Grid';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography';
import Search from '@material-ui/icons/Search';

import React from 'react';
import withSession from '../../../../../HoCs/withSession';
import AuthNav from './components/AuthNav';
import NavItem from './components/NavItem';
import UnAuthNav from './components/UnauthNav';
import { Container } from './styles';


const NavigationBar = ({ session }) => {
  return (
    <Container>
      <AppBar color={'secondary'}>
        <Toolbar variant={'dense'}>
          <Grid container item justify={'space-between'} alignItems={'center'} direction='row'>
            <Button color={'primary'}>
              Write a post
            </Button>
            <Typography variant='h3'>
              Medium
            </Typography>
            <div>
              <Search/>
              {session && session.getCurrentUser ? <AuthNav/> : <UnAuthNav/>}
            </div>
          </Grid>
        </Toolbar>
        <NavItem/>
      </AppBar>
    </Container>
  );
};

export default withSession(NavigationBar);
