import React, { Component } from 'react';
import DefaultPageTemplate from '../containers/DefaultPageTemplate';
import { DateUtils } from '../utils/DateUtils';
import Calendar from '../components/Calendar';

import classNames from 'classnames/bind';
import styles from './Reservation.scss';
const st = classNames.bind(styles);

class Reservation extends Component {


    constructor(props){
        super(props);

        // console.log('firstDate', this.firstDate);
        // console.log('lastDate', this.lastDate);
        // console.log('counts', this.counts);
        // console.log(this.datesArray);

    }

    render() {
        return (
            <DefaultPageTemplate>
            
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">예약관리</li>
                </ol>
            </nav>

            <Calendar />

            </DefaultPageTemplate>
        );
    }
}
 
export default Reservation;
