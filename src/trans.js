import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {FormControl,Nav, Navbar, NavItem, FormGroup, Button,LinkContainer,ControlLabel} from 'react-bootstrap';
import { Route, BrowserRouter, NavLink, } from "react-router-dom";
import "./Login.css";

class DBAccess extends React.Component {
  render() {
    return (
    <p>Hello</p>
    );
  }
}

// ========================================

ReactDOM.render(
  <div>
      <BrowserRouter>
      <DBAccess/>
      </BrowserRouter>
  </div>,
  document.getElementById('root')
);
export default DBAccess;
