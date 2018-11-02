import AppBar from '@material-ui/core/AppBar/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid/Grid';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography';
import Search from '@material-ui/icons/Search';

import React from 'react';
import { Container } from './styles';
import {} from 'apollo-client';

const NavigationBar = () => {
  return (
    <Container>
      <AppBar color="secondary">
        <Toolbar variant="dense">
          <Grid container item justify="space-between" alignItems="center" direction='row'>
            <Button color="primary">
              Write a post
            </Button>
            <Typography variant='h3'>
              Medium
            </Typography>
            <div>
              <Search/>
              {/*currentUser ? <AuthNav/> : <UnAuthNav/>*/}
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default NavigationBar;

