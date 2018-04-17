import React, { Component } from 'react';
import DefaultPageTemplate from '../containers/DefaultPageTemplate';
import { DateUtils } from '../utils/DateUtils';


import classNames from 'classnames/bind';
import styles from './Reservation.scss';
const st = classNames.bind(styles);

class Reservation extends Component {

    firstDate = DateUtils.getFirstDateOfCalendar(new Date());
    lastDate = DateUtils.getLastDateOfCalendar(new Date());
    counts = DateUtils.countDaysBetween(this.firstDate, this.lastDate)+1;
    datesArray = DateUtils.getCalendarArray(this.firstDate, this.counts);


    constructor(props){
        super(props);

        console.log('firstDate', this.firstDate);
        console.log('lastDate', this.lastDate);
        console.log('counts', this.counts);
        console.log(this.datesArray);

    }

    render() {
        return (
            <DefaultPageTemplate>
            
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">예약관리</li>
                </ol>
            </nav>

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


            </DefaultPageTemplate>
        );
    }
}
 
export default Reservation;
