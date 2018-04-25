import React, {Component} from 'react';
import DefaultPageTemplate from 'containers/DefaultPageTemplate';
import SalesListContainer from 'containers/SalesListContainer';
import SalesDetailContainer from 'containers/SalesDetailContainer';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';

class Sales extends Component {

    render() {
        return (
            <DefaultPageTemplate>
                <Breadcrumb>
                    <BreadcrumbItem active>매출관리</BreadcrumbItem>
                </Breadcrumb>

                <Switch>
                    <Route exact path="/sales" component={SalesListContainer} />
                    <Route path="/sales/:path" component={SalesDetailContainer} />
                </Switch>
            </DefaultPageTemplate>
        );
    }
}

export default Sales;
