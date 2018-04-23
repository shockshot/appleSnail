import React, { Component } from 'react';
import SalesList from '../components/SalesList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchSales } from '../actions/SalesActions';

class SalesListContainer extends Component {
    render(){
        return (
            <SalesList onSearch={this.props.handleSearch}/>
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
        handleSearch: bindActionCreators(searchSales, dispatch)
    };
};
  
  export default connect(mapStateToProps, mapDispatchProps)(SalesListContainer);