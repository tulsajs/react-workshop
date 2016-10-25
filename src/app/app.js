import '../style/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes';

const rootElement = document.getElementById('main');

let element = (
  <div>
    <Router history={browserHistory} routes={routes} />
  </div>
);

ReactDOM.render(
  element,
  rootElement
);
