import React, { Component } from 'react';
import DefaultPageTemplate from 'containers/DefaultPageTemplate';
// import { DateUtils } from '../utils/DateUtils';
import Calendar from 'components/common/Calendar';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class Reservation extends Component {


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
