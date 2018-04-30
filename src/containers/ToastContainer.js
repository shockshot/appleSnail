import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { addMessage } from 'actions/ToastActions';
// import { Logger } from 'helpers';

import  Toasts  from 'components/common/Toasts';

// class ToastContainer extends Component {
//   render(){
//     return(
//       <Toasts messages={this.props.messages}/>
//     )
//   }
// }
const ToastContainer = (props) => <Toasts messages={props.messages}/>

const mapStateToProps = ({toast}) => {
  return {
      messages: toast.messages
  };
};

const mapDispatchProps = (dispatch) => {
  return {
      // addMessage: bindActionCreators( addMessage, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchProps)(ToastContainer);