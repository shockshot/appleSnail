import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import './Login.css';
import '../components/LoginForm';
import LoginForm from '../components/LoginForm';

class Login extends Component {
    isLogin = false;

    handleLogin = (e) => {
      e.preventDefault();
      console.log('handleLogin called', e);

    };

    render() {
        return (
          <div className="login">
            <LoginForm onLogin={this.handleLogin}/>
          </div>
        );
    }
}

export default Login;



