import React, {Component} from 'react';
import DefaultPageTemplate from '../containers/DefaultPageTemplate';
import SalesListContainer from '../containers/SalesListContainer';

class Sales extends Component {
    render() {
        return (
            <DefaultPageTemplate>

                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">매출관리</li>
                    </ol>
                </nav>

            <SalesListContainer />

            </DefaultPageTemplate>
        );
    }
}

export default Sales;
