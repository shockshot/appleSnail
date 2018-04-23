// https://velopert.com/3401 async thunk 사용하기

import React, { Component } from 'react';
// import { withRouter } from 'react-router'
// import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux';
import { login, logout } from '../actions/AuthActions';
import { bindActionCreators } from 'redux';

// isLogin = false;

class LoginContainer extends Component {

  constructor(props){
    super(props);
    console.log(props);

    this.props.logout();
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
      handleLogin: bindActionCreators(login, dispatch),
        // dispatch(login(userId, password));
      // },
      logout: bindActionCreators(logout, dispatch),
      // logout: () => {
      //   dispatch(logout());
      // }
  };
};

export default connect(mapStateToProps, mapDispatchProps)(LoginContainer);


// export default LoginContainer;