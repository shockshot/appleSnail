import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Logger } from 'helpers';
import RegisterForm from 'components/RegisterForm';
import * as authActions from 'actions/AuthActions';


class RegisterContainer extends Component {


  handleDuplicatedCheck = (userId) => {
    // Logger.debug("handleDuplicatedCheck", userId);
    this.props.handleActions.reqIdCheck(userId);
  }


  render(){
    return(
      <RegisterForm onDuplicatedCheck={this.handleDuplicatedCheck} duplicatedCheck={this.props.duplicatedCheck}/>
    )
  }

}


// export default SalesDetailContainer;
const mapStateToProps = ({auth}) => {
  return {
    duplicatedCheck: auth.duplicatedCheck,
    userId: auth.userId
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    handleActions: bindActionCreators(authActions, dispatch)
      // handleActions: bindActionCreators(salesActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchProps)(RegisterContainer);