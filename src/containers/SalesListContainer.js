import React, { Component } from 'react';
import SalesList from '../components/SalesList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as salesActions from '../actions/SalesActions';

class SalesListContainer extends Component {

    constructor(props){
        super(props);
        this.props.handleActions.search();
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
        // console.log('getDerivedStateFromProps');
        // 여기서는 setState 를 하는 것이 아니라
        // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
        // 사용됩니다.
        /*
        if (nextProps.value !== prevState.value) {
          return { value: nextProps.value };
        }
        return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
        */
    //   }
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