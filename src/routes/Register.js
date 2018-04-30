import React, { Component } from 'react';
import RegisterUserContainer from 'containers/register/RegisterUserContainer';
import AfterRegister from 'components/register/AfterRegister';
import RegisterShopContainer from 'containers/register/RegisterShopContainer';

import { Route, Switch } from 'react-router-dom';

class Register extends Component {

    render() {
        return (

            // <RegisterContainer />
          <div className="login">
            <Switch>
              <Route exact path="/register" component={RegisterUserContainer}/>
              <Route path="/register/success" component={AfterRegister} />
              <Route path="/register/shop" component={RegisterShopContainer} />
            </Switch>
          </div>
        );
    }
}

export default Register;



