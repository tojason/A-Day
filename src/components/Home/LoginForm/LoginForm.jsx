import React, { Component } from 'react';
import {
  Segment,
  Button,
  Divider,
  Input,
  Grid,
  Container,
  Header,
  Form,
  Icon
} from 'semantic-ui-react';

import styles from './LoginForm.scss';

class LoginForm extends Component {

  constructor() {
    super();
    this.state = {
      user: {
        username: '',
        password: '',
      },
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  onChangeUsername(event) {
    const user_cred = this.state.user;
    user_cred.username = event.target.value;
    this.setState({ user: user_cred });
  }

  onChangePassword(event) {
    const user_cred = this.state.user;
    user_cred.password = event.target.value;
    this.setState({ user: user_cred });
  }

  handleLogin() {
    let user_cred = this.state.user;
    if (user_cred.username === 'qq' && user_cred.password === 'qq') {
      console.log('login success')
      user_cred = {
        username: '',
        password: '',
      }
    } else {
      user_cred.password = ''
    }
    this.setState({ user: user_cred });
  }

  render() {
    return (
      <div className='LoginForm'>
        <Form
          size='huge'
          >
          <Form.Field>
            <Input
              id='username'
              icon='user'
              iconPosition='left'
              placeholder='Username'
              value={this.state.user.username}
              onChange={this.onChangeUsername}
              />
          </Form.Field>
          <Form.Field>
            <Input
              id='password'
              icon='unlock alternate'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={this.state.user.password}
              onChange={this.onChangePassword}
              />
          </Form.Field>
          <Form.Field>
            <Button
              fluid
              animated='fade'
              size='huge'
              color='green'
              onClick={this.handleLogin}
              >
              <Button.Content visible>Login</Button.Content>
              <Button.Content hidden>
                <Icon name='right arrow' />
              </Button.Content>
            </Button>
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
