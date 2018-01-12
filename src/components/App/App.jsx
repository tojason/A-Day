import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import * as firebase from "firebase";
import config from './firebase-config';

import Home from '../Home/Home.jsx';
import Todo from '../Todo/Todo.jsx'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/todo" component={Todo}/>
      <Route exact path="/" component={Home}/>
    </Switch>
  </Router>
);

export default App;
