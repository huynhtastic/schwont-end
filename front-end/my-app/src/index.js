import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import { Button, Input } from 'antd';
import "./Login.css";


class Login extends React.Component {
    state = {
      email: '',
      password: '',
    }
    
    onChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value,
        });
    }

    onSubmit = async () => {
        const response = await this.props.mutate({
        variables: this.state,
        });
        const { token, refreshToken } = response.data.login;
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);
    }
    render() {
      return (
        <div>
          <p><Input
            name='email'
            placeholder='Email'
            onChange={e => this.onChange(e)}
            value={this.state.email} /></p>
          <p><Input
            name='password'
            placeholder='Password'
            type='password'
            onChange={e => this.onChange(e)}
            value={this.state.password} /></p>
          <br />
          <Button >Login</Button>
        </div>
      );
    }
  }

class Board extends React.Component {

  render() {
    return (
        <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Charles_Schwab_Corporation_logo.svg/2000px-Charles_Schwab_Corporation_logo.svg.png" 
        width="100" height="100"></img>
        <div class="topnav" id="myTopnav">
        <a href="#delete">Delete User</a>
        <a href="#add">Add User</a>
        <a href="#login">Login</a>
        <a href="#home" class="active">Home</a>
        
       
        
        </div>
      </div>
      

    );
  }
}

// ========================================

ReactDOM.render(
  <div>
      <Board/>
      <Login/>
  </div>,
  document.getElementById('root')
);

