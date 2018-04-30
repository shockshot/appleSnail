import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Logger } from 'helpers';
import RegisterUserForm from 'components/register/RegisterUserForm';
// import * as authActions from 'actions/AuthActions';
import * as registerActions from 'actions/RegisterActions';


class RegisterUserContainer extends Component {


  handleDuplicatedCheck = (userId) => {
    // Logger.debug("handleDuplicatedCheck", userId);
    this.props.handleActions.reqIdCheck(userId);
  }

  handleSubmit = (frm) => {
    this.props.handleActions.reqRegisterUser({
      userId: frm.userId,
      userName: frm.userName,
      password: frm.password,
      phoneNo: frm.phoneNo
    });
  }


  render(){
    return(
      <RegisterUserForm 
        onDuplicatedCheck={this.handleDuplicatedCheck} 
        duplicatedCheck={this.props.duplicatedCheck}
        onSubmit={this.handleSubmit}
      />
    )
  }

}


// export default SalesDetailContainer;
const mapStateToProps = ({register}) => {
  return {
    duplicatedCheck: register.duplicatedCheck,
    userId: register.userId
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    handleActions: bindActionCreators(registerActions, dispatch)
      // handleActions: bindActionCreators(salesActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchProps)(RegisterUserContainer);