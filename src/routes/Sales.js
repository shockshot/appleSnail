import React, {Component} from 'react';
import DefaultPageTemplate from '../containers/DefaultPageTemplate';
import SalesListContainer from '../containers/SalesListContainer';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class Sales extends Component {
    render() {
        return (
            <DefaultPageTemplate>

                <Breadcrumb>
                    <BreadcrumbItem active>매출관리</BreadcrumbItem>
                </Breadcrumb>

            <SalesListContainer />

            </DefaultPageTemplate>
        );
    }
}

export default Sales;
