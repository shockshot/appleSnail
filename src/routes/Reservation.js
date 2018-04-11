import React, { Component } from 'react';
import DefaultPageTemplate from '../components/DefaultPageTemplate';




class Reservation extends Component {
    render() {
        return (
            <DefaultPageTemplate>
            
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">예약관리</li>
                </ol>
            </nav>


            </DefaultPageTemplate>
        );
    }
}
 
export default Reservation;
