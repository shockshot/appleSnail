import React, { Component } from 'react';
import { DateUtils } from 'utils/DateUtils';
import classNames from 'classnames/bind';
import styles from './Calendar.scss';
import v4 from 'uuid';

const st = classNames.bind(styles);
const weekTitles = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

class Calendar extends Component {

  constructor(props){
    super(props);
    this.today = new Date();
    this.viewDay = props.viewDay;
    const firstDate = DateUtils.getFirstDateOfCalendar(this.viewDay);
    const lastDate = DateUtils.getLastDateOfCalendar(this.viewDay);
    const counts = DateUtils.countDaysBetween(firstDate, lastDate)+1;
    this.datesArray = DateUtils.getCalendarArray(firstDate, counts);
  }

  render(){
    return (
      <div className={st('calendar')}>
        <h2>{this.viewDay.getFullYear()}년 {this.viewDay.getMonth()+1}월</h2>
        <ul className={st("calendar-week")}>
          <li>
            <ul className={st("calendar-header")}>
              {weekTitles.map(day => 
                <li key={day} className={st("cal-col")}>{day}</li>
              )}
            </ul>
          </li>
          {this.datesArray.map(week => 
          <li key={v4()}>
            <ul>
              {week.map(date => 
                <li className={st("cal-col", "cal-day") + ' '+(DateUtils.isToday(date)?st('today'):'' )} 
                  key={v4()}
                  >
                  <div className={st("dateLabel")}>
                    {date.getDate()}
                  </div>
                  <div>
                    
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