import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Calendar from 'components/reservation/Calendar';
import ReservationForm from 'components/reservation/ReservationForm';

import { Logger } from 'helpers';

class ReservationContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      isFormOpened : true
    }
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
      <Calendar viewDay={new Date()} onNewReservation={this.openForm}/>
      <ReservationForm isOpened={this.state.isFormOpened} toggle={this.closeForm}/>
      </div>
    )
  }

}

const mapStateToProps = ({reservation}) => {
  // Logger.debug('customer', customer);
  return {

  };
};

const mapDispatchProps = (dispatch) => {
  return {
    // getCustomerList: () => dispatch(reqList())
  };
};

export default connect(mapStateToProps, mapDispatchProps)(ReservationContainer);