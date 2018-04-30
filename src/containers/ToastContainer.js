import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addMessage } from 'actions/ToastActions';
import { Logger } from 'helpers';

import  Toasts  from 'components/common/Toasts';

class ToastContainer extends Component {

  // messages = [
  //   {key:1, message: '123'}, 
  //   {key:2, message: '456'}, 
  //   {key:3, message: '789'}
  // ];
  constructor(props){
    super(props);
    this.state = {messages: props.messages};
  }

  componentWillReceiveProps(nextProps){
    Logger.debug('#nextProps', nextProps);
    this.setState({
      messages: nextProps.messages
    })
  }

  render(){
    return(
      <div>
      <Toasts messages={this.state.messages}/>
      <button onClick={e => this.props.addMessage('123')}>addmessage</button>
      </div>
    )
  }
}

// export default ToastContainer;

const mapStateToProps = ({toast}) => {
  Logger.debug('#toast', toast);
  return {
      messages: toast.messages
  };
};

const mapDispatchProps = (dispatch) => {
  return {
      addMessage: bindActionCreators( addMessage, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchProps)(ToastContainer);