import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SalesDetail from 'components/SalesDetail';
import * as salesActions from 'actions/SalesActions';
import { Logger } from 'helpers';
class SalesDetailContainer extends Component {

  constructor(props){
    super(props);
    
    Logger.debug('123');

    if(props.match.params.path === 'add') {
      // props.handleActions.getSale();
      
    }else {
      props.handleActions.getSale(props.match.params.path);
    }

    // 
  }

  render(){
    return(
      <div>
        <SalesDetail />
      </div>
    )
  }

}


// export default SalesDetailContainer;
const mapStateToProps = ({sales, loading}) => {
  // console.log('mapStateToProps', sales);
  return {
      loading: loading,
      sales: sales
  };
};

const mapDispatchProps = (dispatch) => {
  return {
      handleActions: bindActionCreators(salesActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchProps)(SalesDetailContainer);