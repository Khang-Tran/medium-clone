import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import palette from '../../styles/palette';
import Home from '../Pages/Home';

const theme = createMuiTheme(palette);

const App = () => (
  <div>
    <MuiThemeProvider theme={theme}>
      <Home/>
    </MuiThemeProvider>
  </div>
);

export default App;
