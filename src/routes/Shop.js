import React, { Component } from 'react';
import DefaultPageTemplate from 'containers/DefaultPageTemplate';
import ShopInfoContainer from 'containers/shop/ShopInfoContainer';
import ShopServiceContainer from 'containers/shop/ShopServiceContainer';
import { Route, Switch, Redirect } from 'react-router-dom';
// import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class Shop extends Component {
  render() {
    return (
      <DefaultPageTemplate>
      
        <Switch>
          <Route exact path="/shop" render={() => (<Redirect push={true} to="/shop/service"/>)}/>
          <Route path="/shop/service" component={ShopServiceContainer} />
          <Route path="/shop/info"    component={ShopInfoContainer} />
        </Switch>


      </DefaultPageTemplate>
    );
  }
}
 
export default Shop;
