import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import List from '../pages/List';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/list" component={List} />
    <Route path="/repository" component={Repository} />
  </Switch>
);

export default Routes;
