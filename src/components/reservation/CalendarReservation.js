import React, {Component} from 'react';
import {Button, Popover, PopoverHeader, PopoverBody} from 'reactstrap';

import { DateUtils } from 'utils';

import classNames from 'classnames/bind';
import styles from './CalendarReservation.scss';
const st = classNames.bind(styles);


class CalendarReservation extends Component {


  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render(){
    return (
      <li >
        <span className={st('time')}>{DateUtils.format(new Date(this.props.reservation.reservationDateTime), 'hh:mm')}</span>
        <Button id={'reservation_'+ this.props.reservation.reservationNo} onClick={this.toggle} className={st('reservationBtn')}>
          {this.props.reservation.customerName}
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target={'reservation_'+ this.props.reservation.reservationNo} toggle={this.toggle}>
          {/* <PopoverHeader>Popover Title</PopoverHeader> */}
          <PopoverBody>
            예약자 : {this.props.reservation.customerName} <br />
            메모: {this.props.remark}
            
          </PopoverBody>
        </Popover>
      </li>
    )
  }
}

export default CalendarReservation;