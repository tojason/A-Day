import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import styles from './App.scss';

import Home from '../Home/Home.jsx';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  </Router>
);

export default App;
