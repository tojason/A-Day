import React, { Component } from 'react'
import axios from 'axios' // get user info on login success
import {
  Header,
  Menu,
  Grid,
  Segment,
  Label,
  Message,
  Item,
  Card,
  Button,
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
    const extra = (
      <Button.Group
        widths={3}
        >
        <Button basic color='grey'>Pause</Button>
        <Button basic color='red'>Start</Button>
        <Button basic color='green'>Done</Button>
      </Button.Group>
    )
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
              <Header
                textAlign='center'
                as='h1'
                >
                12-31-2017
              </Header>
              <Segment
                inverted
                tertiary
                color='yellow'
                >
                <Grid
                  stretched
                  columns={3}
                  className='item'
                  >
                  <Grid.Column>
                    <Segment
                      className='item-header'
                      >
                      <Label
                        color='teal'
                        size='tiny'
                        className='item-category'
                        >
                        CS 446
                      </Label>
                    </Segment>
                    <Item.Group>
                      <Item>
                        <Item.Content>
                          <Item.Description>Assignment 1</Item.Description>
                        </Item.Content>
                      </Item>
                    </Item.Group>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment
                      className='item-middle upper'
                      >
                      <Label
                        color='pink'
                        className='item-priority'
                        >
                        { 'Priority:' }
                        <Label.Detail>
                          {'High'}
                        </Label.Detail>
                      </Label>
                    </Segment>
                    <div className='item-target-date'>
                      <div className='left'>
                        { 'Target Date: ' }
                      </div>
                      <div className='right'>
                        <div className='item-date'>
                          { '1-1-2018' }
                        </div>
                        <div className='item-time'>
                          { 'Monday 4:00 PM' }
                        </div>
                      </div>
                    </div>
                  </Grid.Column>
                  <Grid.Column>
                    <Card>
                      <Card.Content
                        textAlign='center'
                        header='Time used: 2 hrs 30 mins'
                        />
                      <Card.Content extra>
                        { extra }
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                </Grid>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <div className='outer outer-item'>
                <div className="item-col">Left</div>
                <div className="item-col">Center</div>
                <div className="item-col">Right</div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }

}

export default Todo
