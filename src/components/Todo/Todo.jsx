import React, { Component } from 'react'
import axios from 'axios' // get user info on login success
import {
  Header,
  Menu,
  Grid,
  Segment
} from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

import styles from './Todo.scss'

class Todo extends Component {

  constructor(props) {
    super(props)

    this.state = {
      activeItem: 'Home'
    }

    this.handleMenuItemClick = this.handleMenuItemClick.bind(this)
  }

  handleMenuItemClick(event) {

  }

  render() {
    let msg = 'No User Is Login'
    let username = this.props.location.username
    if (username) {
      msg = username + ' is login.'
    }
    const { activeItem } = this.state
    return (
      <div className='Todo'>
        <Menu
          fixed='top'
          inverted
          >
          <Menu.Item>
            <img src='/assets/logo2.svg' />
          </Menu.Item>
          <Menu.Item
            name='Schedule'
            color='pink'
            active={ activeItem === 'Home' }
            onClick={this.handleMenuItemClick}
            />
          <Menu.Menu position='right'>
            <Menu.Item
              active
              color='teal'
              name='signin'
              as={Link}
              to='/'
              >
                Sign In
            </Menu.Item>
            <Menu.Item
              name='signup'
              >
              Sign Up
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Grid className='page main'>
          <Grid.Row>
            <Grid.Column>
              <Header
                textAlign='center'
                as='h1'
                >
                { msg }
              </Header>
              <Segment
                inverted
                tertiary
                color='yellow'
                >
                <Grid
                  stretched
                  columns={3}
                  >
                  <Grid.Column>
                    <Segment>1</Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>1</Segment>
                    <Segment>2</Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>1</Segment>
                    <Segment>2</Segment>
                  </Grid.Column>
                </Grid>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }

}

export default Todo
