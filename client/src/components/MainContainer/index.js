import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import palette from '../../styles/palette';

const theme = createMuiTheme(palette);

const App = () => (
  <div>
    <MuiThemeProvider theme={theme}>
      App
    </MuiThemeProvider>
  </div>
);

export default App;
