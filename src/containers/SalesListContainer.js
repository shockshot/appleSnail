import React, { Component } from 'react';
import SalesList from '../components/SalesList';
import { connect } from 'react-redux';

class SalesListContainer extends Component {
    render(){
        return (
            <SalesList />
        );
    }

}

const mapStateToProps = (state) => {
    return {
        // isLogin: state.isLogin,
        // userId: state.userId
    };
  };
  
  const mapDispatchProps = (dispatch) => {
    return {
        // handleLogin: (userId, password) => { 
        //   dispatch(login(userId, password));
        // },
        // logout: () => {
        //   dispatch(logout());
        // }
    };
  };
  
  export default connect(mapStateToProps, mapDispatchProps)(SalesListContainer);