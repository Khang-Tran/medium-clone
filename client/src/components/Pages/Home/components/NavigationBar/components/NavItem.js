import Button from '@material-ui/core/Button/Button';
import Grid from '@material-ui/core/Grid/Grid';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import React from 'react';

const navBarItems = [
  'Home', 'Culture', 'Tech', 'Startup', 'Self', 'Design', 'Politic', 'Heath'
];
const NavItem = () => (
  <Grid container justify={'center'} alignItems={'center'}>
    <Toolbar variant="dense">
      {navBarItems.map(item =>
        <Button key={item}>
          {item}
        </Button>
      )}
    </Toolbar>
  </Grid>
);
export default NavItem;
