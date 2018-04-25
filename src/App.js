import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
// import PropTypes from 'prop-types';
import { Router } from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import { history } from './helpers/history';
import './App.scss';


import Login from 'routes/Login';
import Home from 'routes/Home';
import Customer from 'routes/Customer';
import Reservation from 'routes/Reservation';
import Sales from 'routes/Sales';
import User from 'routes/User';
import Shop from 'routes/Shop';
import NoMatch from 'routes/NoMatch';

//나중에 앱 외부로 빼던가 할것...
//로그인 확인 예외 페이지 url
const auth = {isLogin: false}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}
    render={props => auth.isLogin ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
            pathname: "/login",
            // state: { from: props.location }
        }}/>
      )
    }
  />
)

class App extends Component {

  constructor(props){
    super(props);
    auth.isLogin = props.state.auth.isLogin;

    // token이 없는데 예외 페이지에 없는 경우 redirect...
    // if(!props.state.auth.isLogin &&  excludes.findIndex( e => e === history.location.pathname ) < 0  ) {
      // history.push('/login');
    // }

  }

  componentWillReceiveProps(nextProps){
    // console.log('nextProps', nextProps);
    //로그인 처리 시, auth 에 로그인 상태 변경
    auth.isLogin = nextProps.state.auth.isLogin;
  }


  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/login"       component={Login}/>
            <PrivateRoute exact path="/"      component={Home}       />
            <PrivateRoute path="/customer"    component={Customer}    />
            <PrivateRoute path="/reservation" component={Reservation} />
            <PrivateRoute path="/sales"           component={Sales}       />
            {/* <PrivateRoute path="/sales/:method"       component={Sales}       /> */}
            <PrivateRoute path="/user"        component={User}        />
            <PrivateRoute path="/shop"        component={Shop}        />
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    )
  }

}

// App.propTypes = {
//   store: PropTypes.object.isRequired
// }
// App.childContextTypes = {
//   store: PropTypes.object.isRequired
// }

const mapStateToProps = (state) => {
  return {
      state
  };
};

export default connect(mapStateToProps)(App);
