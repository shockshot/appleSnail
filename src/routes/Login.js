import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import LoginForm from '../components/LoginForm';
import LoginContainer from '../containers/LoginContainer';

class Login extends Component {

    render() {
        return (
          <div className="login">
            <LoginContainer />
          </div>
        );
    }
}

export default Login;



