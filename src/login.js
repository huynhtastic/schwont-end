import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {FormControl,Nav, Navbar, NavItem, FormGroup, Button,LinkContainer,ControlLabel} from 'react-bootstrap';
import { Route, BrowserRouter, NavLink, } from "react-router-dom";
import "./Login.css";

class FormExample extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleChange = this.handleChange.bind(this);
  
      this.state = {
        username: "",
        password: ""
      };
    }
  
    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
      }
    
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
    
      handleSubmit = event => {
        event.preventDefault();
      }

  handleSubmit = event => {
    event.preventDefault();
    const login = {
      username: this.state.username,
      password: this.state.password,
    };

    this.setState({ error: false });
    fetch(`http://localhost:3001/api/login`, {
      method: 'POST',
      body:   JSON.stringify(login),
      headers: { 'Content-Type': 'application/json' },
    })
    // TODO: change alerts to bootstrap alerts
      .then((res) => {
        if (res.status === 404) {
          alert('Invalid Credentials');
          return {};
        } else {
          return res.json();
        }
      })
      .then((json) => {
        this.setCookie(json);
      });
  }


    render() {
      return (
        <div className="Login">
        <form onSubmit={this.handleSubmit}>
           <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username </ControlLabel>
            <FormControl
            padding="20px"
            margin="8px"
              type="text"
              value={this.state.value}
              placeholder="Enter UserName"
              value={this.state.username}
              onChange={this.handleChange}
            />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password </ControlLabel>
           <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
            </FormGroup>
            <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
        </div>
      );
    }
  }

// ========================================

ReactDOM.render(
  <div>
      <BrowserRouter>
      <FormExample/>
      </BrowserRouter>
  </div>,
  document.getElementById('root')
);
export default FormExample;
