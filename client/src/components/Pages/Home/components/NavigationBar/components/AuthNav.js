import IconButton from '@material-ui/core/IconButton/IconButton';
import AccountCircle from '@material-ui/core/SvgIcon/SvgIcon';
import Logout from 'components/Pages/Home/components/Auths/Logout';
import React from 'react';

const AuthNav = () => (
  <React.Fragment>
    <Logout/>
    <IconButton>
      <AccountCircle/>
    </IconButton>
  </React.Fragment>
);

export default AuthNav;
