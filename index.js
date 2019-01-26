import React, { Component ,FormControl} from "react";
import ReactDOM from 'react-dom';
import './index.css';

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
        <div className="login">
          <FormControl
            type="text"
            value={this.state.email}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <Button >Login</Button>
        </div>
      );
    }
  }

class Board extends React.Component {

  render() {
    return (
        <div>
        <div className="board">
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
