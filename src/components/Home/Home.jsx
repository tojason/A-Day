import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import styles from './Home.scss';

import LoginForm from './LoginForm/LoginForm.jsx';

class Home extends Component {
  constructor() {
    super();
    this.clicked = false;
  }

  render() {
    const clicked = true;
    let display = (
        <Button
          color='blue'
          className='login-btn'
          >
          Login
        </Button>
    );
    if (clicked) {
      display = <LoginForm />;
    }
    return (
      <div className='Home'>
        { display }
      </div>
    );
  }
}

export default Home;
