import React, { Component } from 'react';
import { render } from 'react-dom';

// In order for Semantic-UI to work,
// the following line is mandatory
import 'semantic-ui-css/semantic.min.css';

import App from './components/App/App.jsx';

require('./styles/main.scss');

render(
  <App />,
  document.getElementById('app')
);
