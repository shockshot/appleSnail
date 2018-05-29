import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SalesForm from 'components/sales/SalesForm';
import * as salesActions from 'actions/SalesActions';
import * as serviceActions from 'actions/ServiceActions';
import * as serviceCategoryActions from 'actions/ServiceCategoryActions';

import { Logger } from 'helpers';
class SalesFormContainer extends Component {

  constructor(props){
    super(props);
    
    Logger.debug('123');

    if(props.match.params.path === 'add') {
      // props.handleActions.getSale();
      this.props.getServiceList();
      this.props.getServiceCategoryList();

    }else {
      props.handleActions.getSale(props.match.params.path);
    }

    // 
  }

  render(){
    return(
      <div>
        <SalesForm serviceList={this.props.serviceList} serviceCategoryList={this.props.serviceCategoryList}/>
      </div>
    )
  }

}


// export default SalesDetailContainer;
const mapStateToProps = ({sales, loading, service, serviceCategory}) => {
  // console.log('mapStateToProps', sales);
  return {
      loading: loading,
      sales: sales,
      serviceList: service.list,
      serviceCategoryList: serviceCategory.list
  };
};

const mapDispatchProps = (dispatch) => {
  return {
      handleActions: bindActionCreators(salesActions, dispatch),
      getServiceCategoryList: bindActionCreators(serviceCategoryActions.reqList, dispatch),
      getServiceList: bindActionCreators(serviceActions.reqList, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchProps)(SalesFormContainer);