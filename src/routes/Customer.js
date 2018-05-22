import React, { Component } from 'react';
import DefaultPageTemplate from 'containers/DefaultPageTemplate';
import CustomerContainer from 'containers/CustomerContainer';

class Customer extends Component {
    render() {
        return (
            <DefaultPageTemplate>
            
            <CustomerContainer />

            </DefaultPageTemplate>
        );
    }
}
 
export default Customer;
