import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Logger } from 'helpers';

class JoinContainer extends Component {


  render(){
    return(
      <div>
        {this.constructor.name}
      </div>
    )
  }

}


// export default SalesDetailContainer;
const mapStateToProps = ({}) => {
  return {
  };
};

const mapDispatchProps = (dispatch) => {
  return {
      // handleActions: bindActionCreators(salesActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchProps)(JoinContainer);