import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CustomerActions from 'actions/CustomerActions';

import CustomerList from 'components/customer/CustomerList';
import CustomerSimpleForm from 'components/customer/CustomerSimpleForm';
import { Logger } from 'helpers';

class CustomerContainer extends Component {

  constructor(props){
    super(props);

    this.props.getCustomerList();

  }

  render(){
    return (
      <div>
        <CustomerSimpleForm onSubmit={this.props.postCustomer}/>
        <CustomerList dataList={this.props.customerList}/>
      </div>
    )
  }

}

const mapStateToProps = ({customer}) => {
  // Logger.debug('customer', customer);
  return {
    customerList: customer.list
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    // getCustomerList: () => dispatch(reqList())
    getCustomerList: bindActionCreators(CustomerActions.reqList, dispatch),
    postCustomer: bindActionCreators(CustomerActions.reqPost, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchProps)(CustomerContainer);