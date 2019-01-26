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
        email: "",
        password: ""
      };
    }
  
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }
    
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
    
      handleSubmit = event => {
        event.preventDefault();
      }
    render() {
      return (
        <div className="Login">
        <form onSubmit={this.handleSubmit}>
           <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email </ControlLabel>
            <FormControl
            padding="20px"
            margin="8px"
              type="text"
              value={this.state.value}
              placeholder="Enter UserName"
              value={this.state.email}
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
