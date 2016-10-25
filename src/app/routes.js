import React from 'react';
import { Route } from 'react-router';
import { Main, Hello } from './components';

export default (
  <Route>
    <Route path='/hello' component={Hello} />
    <Route path='*' component={Main} />
  </Route>
);
