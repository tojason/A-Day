import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import styles from './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <Button>Click Here</Button>
      </div>
    );
  }
}

export default Home;
