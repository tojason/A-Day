import React, { Component } from 'react';
import { render } from 'react-dom';

import App from './components/App/App.jsx';

require('./styles/main.scss');

render(
  <App />,
  document.getElementById('app')
);
