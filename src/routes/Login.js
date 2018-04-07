import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import './Login.css';

class Login extends Component {
    isLogin = false;

    render() {
        return (
          <div className="login">
            <form className="form-signin">
            <img className="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"></img>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus></input>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"></input> Remember me
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
          </form>
          </div>
        );
    }
}

export default Login;



