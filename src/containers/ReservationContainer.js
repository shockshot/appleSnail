import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as reservationActions from 'actions/ReservationActions';

import Calendar from 'components/reservation/Calendar';
import ReservationForm from 'components/reservation/ReservationForm';

import { Logger } from 'helpers';

class ReservationContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      isFormOpened : false,
      viewDay: new Date()
    }

    const critetria = {};
    this.props.getReservationList(critetria);
  }

  handleChangeViewDay = (newViewDay) => {
    // Logger.debug('newViewDay', newViewDay);
    this.setState({
      viewDay: newViewDay
    });

    Logger.debug('state:', this.state);
  }

  closeForm = () => {
    this.setState({
      isFormOpened : false
    })
  }

  openForm = () => {
    this.setState({
      isFormOpened : true
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
      <ReservationForm isOpened={this.state.isFormOpened} toggle={this.closeForm}/>
      </div>
    )
  }

}

const mapStateToProps = ({reservation}) => {
  // Logger.debug('customer', customer);
  return {
    list: reservation.list
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    // getCustomerList: () => dispatch(reqList())
    getReservationList: bindActionCreators(reservationActions.reqList, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchProps)(ReservationContainer);