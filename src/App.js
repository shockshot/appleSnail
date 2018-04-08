import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Login from './routes/Login';
import Home from './routes/Home';
import NoMatch from './routes/NoMatch';

class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route exact path="/" component={Home}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
