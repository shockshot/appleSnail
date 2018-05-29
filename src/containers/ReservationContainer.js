import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as customerActions from 'actions/CustomerActions';
import * as reservationActions from 'actions/ReservationActions';
import * as serviceActions from 'actions/ServiceActions';
import * as serviceCategoryActions from 'actions/ServiceCategoryActions';

import Calendar from 'components/reservation/Calendar';
import ReservationForm from 'components/reservation/ReservationForm';

import { Logger } from 'helpers';
import { DateUtils } from 'utils';

class ReservationContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      isFormOpened : false,
      viewDay: new Date(),
    }

    const critetria = {};
    this.props.getReservationList(critetria);

    //콤보박스를 위한...
    this.props.serviceCategoryActions.reqList();
    this.props.serviceActions.reqList();

  }

  handleChangeViewDay = (newViewDay) => {
    // Logger.debug('newViewDay', newViewDay);
    this.setState({
      viewDay: newViewDay
    });

    // Logger.debug('state:', this.state);
  }

  closeForm = () => {
    this.setState({
      isFormOpened : false
    })
  }

  openForm = (selectedDate = (new Date()) ) => {
    this.setState({
      isFormOpened : true,
      selectedDate: DateUtils.format(selectedDate, 'yyyyMMdd')
    })
  }

  render(){
    return (
      <div>
      <Calendar 
        viewDay={this.state.viewDay} 
        reservationList={this.props.list}
        onNewReservation={this.openForm} 
        onChangeViewDay={this.handleChangeViewDay}
        
        />
      <ReservationForm 
        isOpened={this.state.isFormOpened} 
        toggle={this.closeForm} 
        customerList={this.props.customerList}
        onSearchCustomer={this.props.searchCustomer}
        reservationDate={this.state.selectedDate}
        serviceList={this.props.serviceList}
        serviceCategoryList={this.props.serviceCategoryList}
        />
      </div>
    )
  }

}

const mapStateToProps = ({reservation, customer, serviceCategory, service}) => {
  // Logger.debug('customer', customer);
  return {
    list: reservation.list,
    customerList: customer.list,
    serviceList: service.list,
    serviceCategoryList: serviceCategory.list
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    // getCustomerList: () => dispatch(reqList())
    getReservationList: bindActionCreators(reservationActions.reqList, dispatch),
    searchCustomer: bindActionCreators(customerActions.reqList, dispatch),

    serviceActions: bindActionCreators(serviceActions, dispatch),
    serviceCategoryActions: bindActionCreators(serviceCategoryActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(ReservationContainer);