import React, { Component } from 'react';
import SalesList from '../components/SalesList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as salesActions from '../actions/SalesActions';

class SalesListContainer extends Component {

    // constructor(props){
    //     super(props);
    // }

    render(){
        return (
            <SalesList 
                searchCondition={this.props.searchCondition}
                onActions={this.props.handleActions}
                dataList={this.props.dataList}
                />
        );
    }

}

const mapStateToProps = ({sales}) => {
    console.log('mapStateToProps', sales);
    return {
        searchCondition: sales.searchCondition,
        dataList: sales.dataList
        // isLogin: state.isLogin,
        // userId: state.userId
    };
};

const mapDispatchProps = (dispatch) => {
    return {
        handleActions: bindActionCreators(salesActions, dispatch)
    };
};
  
  export default connect(mapStateToProps, mapDispatchProps)(SalesListContainer);