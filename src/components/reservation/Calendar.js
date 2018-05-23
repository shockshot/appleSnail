import React, { Component } from 'react';
import { DateUtils } from 'utils';
import classNames from 'classnames/bind';
import styles from './Calendar.scss';

import {Form, Input, Label, FormGroup, Button /*, FormFeedback*/} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faPlus } from '@fortawesome/fontawesome-free-solid';

import uuid from 'uuid';
const st = classNames.bind(styles);



const weekTitles = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

class Calendar extends Component {

  constructor(props){
    super(props);
    this.today = new Date();
    this.viewDay = props.viewDay;
    const firstDate = DateUtils.getFirstDateOfCalendar(this.viewDay);
    this.datesArray = DateUtils.getCalendarArray(firstDate, DateUtils.countDaysBetween(firstDate, DateUtils.getLastDateOfCalendar(this.viewDay))+1);
  }

  render(){
    return (
      <div className={st('calendar')}>
        <h2>
          <Button className="btn-circle">
            <FontAwesomeIcon icon={faAngleLeft}/>
          </Button>
          {this.viewDay.getFullYear()}년 {this.viewDay.getMonth()+1}월
          <Button className="btn-circle">
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
          {this.datesArray.map(week => 
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