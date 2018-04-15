import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


import Login from './routes/Login';
import Home from './routes/Home';
import Customer from './routes/Customer';
import Reservation from './routes/Reservation';
import Sales from './routes/Sales';
import User from './routes/User';
import Shop from './routes/Shop';
import NoMatch from './routes/NoMatch';

class App extends Component {

  getChildcontext() {
    return {
      store: this.props.store
    }
  }

  componentWillMount() {
    this.unsubscribe = this.props.store.subscribe( () => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/login"       component={Login}/>
            <Route exact path="/"      component={Home}/>
            <Route path="/customer"    component={Customer}/>
            <Route path="/reservation" component={Reservation}/>
            <Route path="/sales"       component={Sales}/>
            <Route path="/user"        component={User}/>
            <Route path="/shop"        component={Shop}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

App.childContextTypes = {
  store: PropTypes.object.isRequired
}

export default App;
