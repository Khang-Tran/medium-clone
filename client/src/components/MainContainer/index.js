import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home';


const MainContainer = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
  </Switch>
);

export default MainContainer;
