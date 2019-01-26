import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import FormExample from "./login";
import DBAccess from "./trans"
import {FormControl,Nav, Navbar, NavItem, FormGroup, Button,LinkContainer} from 'react-bootstrap';
import { Route, BrowserRouter, NavLink, } from "react-router-dom";




class Board extends React.Component {
 
  render() {
    return (
        <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Charles_Schwab_Corporation_logo.svg/2000px-Charles_Schwab_Corporation_logo.svg.png" 
        width="100" height="100"></img>
        <div class="topnav" id="myTopnav">     
        <NavLink to="/trans">Transaction</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/">Home</NavLink>    
        </div>
        <Route path="/login" exact component={FormExample}/>
        <Route path="/trans" exact component={DBAccess}/>
      </div>
    );
  }
  
}
class Main extends React.Component{
  render()
  {
    return(
      <img src="https://www.mymoneyblog.com/wordpress/wp-content/uploads/2015/03/schwabip3full.jpg" width="100%" margin-top="30px">
      </img>
    );
  }
}
// ========================================

ReactDOM.render(
  <div>
    <BrowserRouter>
    <Board/>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
 
);

