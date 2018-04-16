import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

// isLogin = false;

class LoginContainer extends Component {

  handleLogin = (e) => {
    e.preventDefault();
    console.log('handleLogin called', e);
  
  };

  render() {
      return (
        <LoginForm onLogin={this.handleLogin}/>
      );
  }
}

export default LoginContainer;