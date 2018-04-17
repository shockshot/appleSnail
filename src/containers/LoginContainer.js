// https://velopert.com/3401 async thunk 사용하기

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux';
import { login } from '../actions/AuthActions';

// isLogin = false;

class LoginContainer extends Component {

  constructor(props){
    super(props);
    console.log(props);
    // console.log(props);
  }

  // handleLogin = (userId, password) => {
  //   this.props.handleLogin(userId, password);
  // };

  render() {
    const {handleLogin} = this;

      return (
        <LoginForm onLogin={this.props.handleLogin}/>
      );
  }
}


const mapStateToProps = (state) => {
  return {
      isLogin: state.isLogin,
      userId: state.userId
  };
};

const mapDispatchProps = (dispatch) => {
  return {
      handleLogin: (userId, password) => { dispatch(login(userId, password))}
  };
};
export default connect(mapStateToProps, mapDispatchProps)(LoginContainer);


// export default LoginContainer;