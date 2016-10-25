import React from 'react';
import { Route } from 'react-router';
import { Main } from './components';

export default (
  <Route>
    <Route path='*' component={Main} />
  </Route>
);
