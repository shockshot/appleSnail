import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import ShopServiceList from 'components/shop/ShopServiceList';

// import { Logger } from 'helpers';

class ShopServiceContainer extends Component {


  render(){
    return(
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>서비스관리</BreadcrumbItem>
        </Breadcrumb>

        {/* {this.constructor.name} */}
        <ShopServiceList />

      </div>
    )
  }

}


// export default SalesDetailContainer;
const mapStateToProps = () => {
  return {
  };
};

const mapDispatchProps = (dispatch) => {
  return {
      // handleActions: bindActionCreators(salesActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchProps)(ShopServiceContainer);