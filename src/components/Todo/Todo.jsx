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
import * as firebase from "firebase";

import styles from './Todo.scss'

class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'Home',
      username: 'empty'
    };

    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
  }

  componentDidMount() {
    // async value with the database
    const db = firebase.database();
    let username_ref = db.ref().child('username');
    username_ref.on('value', snap => {
      this.setState({
        username: snap.val()
      });
    });
  }

  handleMenuItemClick(event) {

  }

  render() {
    const todo_item = {
      category: 'CS446',
      name: 'Assignment 1',
      description: null,
      priority: 'high',
      targetDate: {
        time: '4:00 PM',
        date: '1-1-2018',
      },
      status: 'created',
      timeCreated: null,
      timeStart: null,
      timeEnd: null,
      totalTime: null,
    };
    let msg = 'No User Is Login';
    // let username = this.props.location.username;
    let username = this.state.username;
    if (username) {
      msg = username + ' is login.';
    }
    const { activeItem } = this.state;
    const extra = (
      <Button.Group
        widths={3}
        >
        <Button basic color='grey'>Pause</Button>
        <Button basic color='red'>Start</Button>
        <Button basic color='green'>Done</Button>
      </Button.Group>
    );
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
                        size='small'
                        className='item-category'
                        >
                        CS 446
                      </Label>
                    </Segment>
                    <Item.Group>
                      <Item>
                        <Item.Content>
                          <Item.Description>
                            { todo_item.name }
                          </Item.Description>
                        </Item.Content>
                      </Item>
                    </Item.Group>
                  </Grid.Column>
                  <Grid.Column className='item-middle'>
                    <Segment
                      className='upper'
                      >
                      <Label
                        color='pink'
                        className='item-priority'
                        >
                        { 'Priority:' }
                        <Label.Detail>
                          { todo_item.priority }
                        </Label.Detail>
                      </Label>
                    </Segment>
                    <div className='item-target-date'>
                      <div className='left'>
                        { 'Target Date:' }
                      </div>
                      <div className='right'>
                        <div className='item-date'>
                          { todo_item.targetDate.date }
                        </div>
                        <div className='item-time'>
                          { 'Monday ' + todo_item.targetDate.time }
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
    );
  }

}

export default Todo
