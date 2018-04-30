import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
// import PropTypes from 'prop-types';
import { Router } from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import { history } from './helpers';
import './App.css';

import ToastContainer from 'containers/ToastContainer';

import Login       from 'routes/Login';
import Register    from 'routes/Register';
import Home        from 'routes/Home';
import Customer    from 'routes/Customer';
import Reservation from 'routes/Reservation';
import Sales       from 'routes/Sales';
import User        from 'routes/User';
import Shop        from 'routes/Shop';
import NoMatch     from 'routes/NoMatch';


//나중에 앱 외부로 빼던가 할것...
//로그인 확인 예외 페이지 url
const PrivateRoute = ({ component: Component, ...rest, isLogin }) => (
  <Route {...rest}
    render={props => isLogin ? ( <Component {...props} /> ) : (
        <Redirect push={true} to={{
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
    // token이 없는데 예외 페이지에 없는 경우 redirect...
    // if(!props.state.auth.isLogin &&  excludes.findIndex( e => e === history.location.pathname ) < 0  ) {
      // history.push('/login');
    // }
    
    this.state = {
      isLogin: props.auth.isLogin
    }
  }

  componentWillReceiveProps(nextProps){
    // console.log('nextProps', nextProps);
    // 로그인 처리 시, auth 에 로그인 상태 변경
    this.setState({
      ...this.state,
      isLogin: nextProps.auth.isLogin
    });
  }


  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/login"              component={Login}/>
            <Route path="/register"           component={Register}/>
            <PrivateRoute exact path="/"      component={Home}        isLogin={this.state.isLogin} />
            <PrivateRoute path="/customer"    component={Customer}    isLogin={this.state.isLogin} />
            <PrivateRoute path="/reservation" component={Reservation} isLogin={this.state.isLogin} />
            <PrivateRoute path="/sales"       component={Sales}       isLogin={this.state.isLogin} />
            <PrivateRoute path="/user"        component={User}        isLogin={this.state.isLogin} />
            <PrivateRoute path="/shop"        component={Shop}        isLogin={this.state.isLogin} />
            <Route component={NoMatch}/>
          </Switch>
          <ToastContainer />
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

const mapStateToProps = ({auth}) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(App);
