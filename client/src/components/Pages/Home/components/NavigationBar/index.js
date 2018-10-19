import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import RestoreIcon from '@material-ui/icons/Restore';
import Search from '@material-ui/icons/Search';
import Logout from 'components/Pages/Home/components/Auths/Logout';
import withSession from 'HoCs/withSession';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  grid-row: nav-start / nav-end;
  grid-column: popular-start / -1;
`;

const LoginButton = styled(Button)`
  && {
    margin-right: 2rem;
    margin-left: 1.5rem;
  }
`;

const NavigationBar = ({ session }) => {
  return (
    <Container>
      <Grid container>
        <Grid container item>
          <Grid container item justify='space-between' direction='row'>
              <Typography variant='h3'>
              Medium
            </Typography>
            <Grid item>
              <IconButton color='primary'>
                <Search/>
              </IconButton>
              {session.getCurrentUser ?
                <Logout/>
                : <React.Fragment>
                  <LoginButton variant='text' color='primary'>
                    <Link to='/login'>Sign in</Link>
                  </LoginButton>
                  <Button variant='outlined' color='primary'>
                    <Link to='/register'>Get started</Link>
                  </Button>
                </React.Fragment>
              }
            </Grid>
          </Grid>
        </Grid>
        <Grid item container justify='center'>
          <BottomNavigation>
            <BottomNavigationAction label="Recents" icon={<RestoreIcon/>}/>
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>}/>
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/>}/>
          </BottomNavigation>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withSession(NavigationBar);
