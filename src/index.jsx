import React from 'react';
import { render } from 'react-dom';

// In order for Semantic-UI to work,
// the following line is mandatory
// import $ from 'jquery'
// import jQuery from 'jquery'
// window.jQuery = jQuery
// import 'semantic-ui-css/semantic.min.js';
// import 'semantic-ui-css/semantic.min.css';
import "!style-loader!css-loader!semantic-ui-css/semantic.min.css";

import App from './components/App/App.jsx';

render(
  <App />,
  document.getElementById('app')
);
