import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

// isLogin = false;

class LoginContainer extends Component {

  handleLogin = (userId, password) => {
    console.log('userId', userId);
    console.log('password', password);
  
  };

  render() {
    const {handleLogin} = this;

      return (
        <LoginForm onLogin={handleLogin}/>
      );
  }
}

export default LoginContainer;