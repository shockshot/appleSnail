// https://velopert.com/3401 async thunk 사용하기

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { Logger } from 'helpers';

import LoginForm from 'components/LoginForm';
import * as authActions from 'actions/AuthActions';

// import PropTypes from 'prop-types';

class LoginContainer extends Component {

  constructor(props){
    super(props);
    Logger.debug(props);

    this.props.handleLogout();
  }

  render() {
    return (
      <LoginForm onLogin={this.props.handleLogin} status={this.props.status}/>
    );
  }
}


const mapStateToProps = ({auth}) => {
  
  return {
      // isLogin: state.isLogin,
      // userId: state.userId,
      status: auth.status
  };
};

const mapDispatchProps = (dispatch) => {
  return {
      handleLogin: bindActionCreators(authActions.reqLogin, dispatch),
      handleLogout: bindActionCreators(authActions.logout, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(LoginContainer);


// export default LoginContainer;