import React, {Component} from 'react';
import DefaultPageTemplate from 'containers/DefaultPageTemplate';
import SalesListContainer from 'containers/sales/SalesListContainer';
import SalesFormContainer from 'containers/sales/SalesFormContainer';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Route, Switch, Redirect } from 'react-router-dom';

class Sales extends Component {

  render() {
    return (
      <DefaultPageTemplate>
        <Breadcrumb>
          <BreadcrumbItem active>매출관리</BreadcrumbItem>
        </Breadcrumb>

        <Switch>
          <Route exact path="/sales" render={() => (<Redirect push={true} to="/sales/list"/>)}/>
          <Route path="/sales/list"  component={SalesListContainer} />
          <Route path="/sales/:path" component={SalesFormContainer} />
        </Switch>
      </DefaultPageTemplate>
    );
  }
}

export default Sales;
