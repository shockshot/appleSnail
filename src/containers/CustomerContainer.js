import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reqList } from 'actions/CustomerActions';

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
        <CustomerSimpleForm />
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
    getCustomerList: () => dispatch(reqList())
  };
};

export default connect(mapStateToProps, mapDispatchProps)(CustomerContainer);