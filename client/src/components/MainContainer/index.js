import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Logout from 'components/Pages/Home/components/Auths/Logout';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import palette from '../../styles/palette';
import Home from '../Pages/Home';
import Login from '../Pages/Home/components/Auths/Login';
import Register from '../Pages/Home/components/Auths/Register';

const theme = createMuiTheme(palette);

const MainContainer = () => (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          <Route path='/logout' component={Logout}/>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
);

export default MainContainer;
