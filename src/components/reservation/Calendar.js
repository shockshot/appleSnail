import React, { Component } from 'react';
import { DateUtils } from 'utils';

import CalendarReservation from './CalendarReservation';
import {Button, Popover, PopoverHeader, PopoverBody} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faPlus } from '@fortawesome/fontawesome-free-solid';

import {Logger} from 'helpers';

import uuid from 'uuid';

import classNames from 'classnames/bind';
import styles from './Calendar.scss';
const st = classNames.bind(styles);

const weekTitles = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];



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
        <table className={st("calendar")}>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <tbody>
            <tr className={st("calendar-header")}>
              {weekTitles.map(day => 
                <th key={day} className={st("cal-col")}>{day}</th>
              )}
            </tr>
            {this.state.datesArray.map(week => 
            <tr key={uuid()}>
              {week.map(date => 
                <td className={st("cal-col", "cal-day") + ' '+(DateUtils.isToday(date)?st('today'):'' )} 
                  key={uuid()}
                  >
                  <div className={st("dateLabel")}>
                    {date.getDate()}
                  </div>
                  <ul className={st("dateContent")}>
                    {this.state.reservationList ? 
                      this.state.reservationList
                        .filter(reservation => DateUtils.isSameDate(new Date(reservation.reservationDateTime), date) )
                        .map(reservation => <CalendarReservation reservation={reservation} key={uuid()}/>) : 
                      ''}
                    <li>
                      <Button className={'btn-circle-sm '+st('btn-trans')} onClick={e=>this.props.onNewReservation(date)} >
                        <FontAwesomeIcon icon={faPlus}/>
                      </Button>
                    </li>
                  </ul>
                </td>
              )}
            </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Calendar;