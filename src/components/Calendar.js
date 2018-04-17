import React, { Component } from 'react';
import { DateUtils } from '../utils/DateUtils';
import classNames from 'classnames/bind';
import styles from './Calendar.scss';
const st = classNames.bind(styles);


class Calendar extends Component {

  firstDate = DateUtils.getFirstDateOfCalendar(new Date());
  lastDate = DateUtils.getLastDateOfCalendar(new Date());
  counts = DateUtils.countDaysBetween(this.firstDate, this.lastDate)+1;
  datesArray = DateUtils.getCalendarArray(this.firstDate, this.counts);

  render(){
    return (
      <div className={st('calendar')}>
        <ul className={st("calendar-week")}>
            <li>
                <ul className={st("calendar-header")}>
                    <li className={st("cal-col")}>SUN</li>
                    <li className={st("cal-col")}>MON</li>
                    <li className={st("cal-col")}>TUE</li>
                    <li className={st("cal-col")}>WED</li>
                    <li className={st("cal-col")}>THU</li>
                    <li className={st("cal-col")}>FRI</li>
                    <li className={st("cal-col")}>SAT</li>
                </ul>
            </li>
            {this.datesArray.map(week => 
            <li>
                <ul>
                    {week.map(date => 
                        <li className={st("cal-col", "cal-day")} >
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