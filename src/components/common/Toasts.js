import React, {Component} from 'react';
import { Alert } from 'reactstrap';

import {Logger} from 'helpers';

import classNames from 'classnames/bind';
import styles from './Toasts.scss';
const st = classNames.bind(styles);

// import v4 from 'uuid';



class Toasts extends Component {
  constructor(props){
    super(props);

    this.state = {
      messages: props.messages
    };
    
  }

  componentWillReceiveProps(nextProps){
    Logger.debug('componentWillReceiveProps', nextProps);
    this.setState({
      messages: nextProps.messages
    })
  }

  // onDismiss = () => {
  //   this.props.onDismiss();
  // }

  render(){
    return(
      <div className={st('toastContainer')+' container' }>
        {this.state.messages ? this.state.messages.map(message => 
          <Alert className={st('toast')} color="info" key={message.messageId}>
            {message.message}
          </Alert>
        ) : ''}
      </div>
    )
  }
}


// const Toasts = (props) => 
// <div>
//   toasts
// </div>

export default Toasts;