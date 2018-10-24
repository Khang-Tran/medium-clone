import IconButton from '@material-ui/core/IconButton/IconButton';
import AccountCircle from '@material-ui/core/SvgIcon/SvgIcon';
import React from 'react';
import Logout from '../../Auths/Logout';

const AuthNav = () => (
  <React.Fragment>
    <Logout/>
    <IconButton>
      <AccountCircle/>
    </IconButton>
  </React.Fragment>
);

export default AuthNav;
