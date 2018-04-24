import React, { Component } from 'react';
import DefaultPageTemplate from '../containers/DefaultPageTemplate';
// import { DateUtils } from '../utils/DateUtils';
import Calendar from '../components/Calendar';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

// import classNames from 'classnames/bind';
// import styles from './Reservation.scss';
// const st = classNames.bind(styles);

class Reservation extends Component {


    // constructor(props){
    //     super(props);

    //     // console.log('firstDate', this.firstDate);
    //     // console.log('lastDate', this.lastDate);
    //     // console.log('counts', this.counts);
    //     // console.log(this.datesArray);

    // }

    render() {
        return (
            <DefaultPageTemplate>
            
            <Breadcrumb>
                <BreadcrumbItem active>예약관리</BreadcrumbItem>
            </Breadcrumb>

            <Calendar viewDay={new Date()}/>

            </DefaultPageTemplate>
        );
    }
}
 
export default Reservation;
