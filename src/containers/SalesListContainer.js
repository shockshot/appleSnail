import React, { Component } from 'react';
import SalesList from '../components/SalesList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as salesActions from '../actions/SalesActions';

class SalesListContainer extends Component {

    constructor(props){
        super(props);
        if(!this.props.dataList || !this.props.dataList.length){
            this.props.handleActions.search();
        }
    }

    componentWillReceiveProps(nextProps){
        console.log('loading', nextProps.loading);
    }

    render(){
        return (
            <SalesList 
                searchCondition={this.props.searchCondition}
                onActions={this.props.handleActions}
                dataList={this.props.dataList}
                loading={this.props.loading}
                />
        );
    }

}

const mapStateToProps = ({sales, loading}) => {
    // console.log('mapStateToProps', sales);
    return {
        searchCondition: sales.searchCondition,
        dataList: sales.dataList,
        loading: loading
    };
};

const mapDispatchProps = (dispatch) => {
    return {
        handleActions: bindActionCreators(salesActions, dispatch)
    };
};
  
export default connect(mapStateToProps, mapDispatchProps)(SalesListContainer);