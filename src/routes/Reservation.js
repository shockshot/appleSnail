import React, { Component } from 'react';
import DefaultPageTemplate from 'containers/DefaultPageTemplate';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import ReservationContainer from 'containers/ReservationContainer';

class Reservation extends Component {


    render() {
        return (
            <DefaultPageTemplate>
            
            <Breadcrumb>
                <BreadcrumbItem active>예약관리</BreadcrumbItem>
            </Breadcrumb>

            <ReservationContainer />

            </DefaultPageTemplate>
        );
    }
}
 
export default Reservation;
