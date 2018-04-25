// https://velopert.com/3401 async thunk 사용하기

import React, { Component } from 'react';
import Logger from 'helpers/Logger';
// import { withRouter } from 'react-router'
// import PropTypes from 'prop-types';
import LoginForm from 'components/LoginForm';
import { connect } from 'react-redux';
// import { login, logout } from '../actions/AuthActions';
import * as authActions from 'actions/AuthActions';
import { bindActionCreators } from 'redux';

// isLogin = false;

class LoginContainer extends Component {

  constructor(props){
    super(props);
    Logger.debug(props);

    this.props.handleLogout();
  }

  render() {
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
      handleLogin: bindActionCreators(authActions.login, dispatch),
      handleLogout: bindActionCreators(authActions.logout, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(LoginContainer);


// export default LoginContainer;