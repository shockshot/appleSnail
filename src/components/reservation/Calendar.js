import React, { Component } from 'react';
import { DateUtils } from 'utils';
import classNames from 'classnames/bind';
import styles from './Calendar.scss';

import {Form, Input, Label, FormGroup, Button /*, FormFeedback*/} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faPlus } from '@fortawesome/fontawesome-free-solid';

import {Logger} from 'helpers';

import uuid from 'uuid';
const st = classNames.bind(styles);

const weekTitles = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];



/////////////////////////////////////////////////////
// 각 개별 예약 표현
/////////////////////////////////////////////////////
const Reservation = (props) => 
<span>
  {props.reservation.customerName}
</span>


/////////////////////////////////////////////////////
// Calendar class
/////////////////////////////////////////////////////
class Calendar extends Component {

  constructor(props){
    super(props);

    this.state = {
      today : new Date(),
      viewDay : props.viewDay,
      datesArray: this.getDateArray(props.viewDay),
      reservationList: props.reservationList
    }

    // this.today = new Date();
    // this.viewDay = props.viewDay;
    // const firstDate = DateUtils.getFirstDateOfCalendar(this.viewDay);
    // this.datesArray = DateUtils.getCalendarArray(firstDate, DateUtils.countDaysBetween(firstDate, DateUtils.getLastDateOfCalendar(this.viewDay))+1);
    // this.reservationList = props.reservationList;
    // Logger.debug('reservationList', props.reservationList);
  }

  getDateArray = (date) => {
    const firstDate = DateUtils.getFirstDateOfCalendar(date);
    return DateUtils.getCalendarArray(firstDate, DateUtils.countDaysBetween(firstDate, DateUtils.getLastDateOfCalendar(date))+1);
  }

  componentWillReceiveProps(nextProps){
    // Logger.debug('nextProps', nextProps);
    if(this.state.viewDay !== nextProps.viewDay){
      this.setState({
        ...nextProps,
        datesArray: this.getDateArray(nextProps.viewDay)
      })
    }else{
      this.setState({
        ...nextProps
      })
    }
  }

  setNextMonth = () => {
    this.props.onChangeViewDay(DateUtils.addMonths(this.state.viewDay, 1));
  }

  setPrevMonth = () => {
    this.props.onChangeViewDay(DateUtils.addMonths(this.state.viewDay, -1));
  }

  render(){
    return (
      <div className={st('calendar')}>
        <h2>
          <Button className="btn-circle" onClick={this.setPrevMonth}>
            <FontAwesomeIcon icon={faAngleLeft}/>
          </Button>
          {this.state.viewDay.getFullYear()}년 {this.state.viewDay.getMonth()+1}월
          <Button className="btn-circle" onClick={this.setNextMonth}>
            <FontAwesomeIcon icon={faAngleRight}/>
          </Button>
        </h2>
        <ul className={st("calendar-week")}>
          <li>
            <ul className={st("calendar-header")}>
              {weekTitles.map(day => 
                <li key={day} className={st("cal-col")}>{day}</li>
              )}
            </ul>
          </li>
          {this.state.datesArray.map(week => 
          <li key={uuid()}>
            <ul>
              {week.map(date => 
                <li className={st("cal-col", "cal-day") + ' '+(DateUtils.isToday(date)?st('today'):'' )} 
                  key={uuid()}
                  >
                  <div className={st("dateLabel")}>
                    {date.getDate()}
                  </div>
                  <div className={st("dateContent")}>
                    {this.state.reservationList ? this.state.reservationList.filter(reservation => DateUtils.isSameDate(new Date(reservation.reservationDateTime), date) ).map(reservation => (
                      <Reservation reservation={reservation}/>
                    )) : '' }
                  </div>
                  <div>
                    <Button className={'btn-circle-sm '+st('btn-trans')} onClick={this.props.onNewReservation} >
                      <FontAwesomeIcon icon={faPlus}/>
                    </Button>
                  </div>
                </li>
              )}
            </ul>
          </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Calendar;