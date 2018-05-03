import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import ShopServiceList from 'components/shop/ShopServiceList';
import * as ServiceCategoryActions from 'actions/ServiceCategoryActions';

// import { Logger } from 'helpers';

class ShopServiceContainer extends Component {

  constructor(props){
    super(props);

    this.props.getServiceCategoryList();
  }

  render(){
    return(
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>서비스관리</BreadcrumbItem>
        </Breadcrumb>

        {/* {this.constructor.name} */}
        <ShopServiceList list={this.props.list}/>

      </div>
    )
  }

}


// export default SalesDetailContainer;
const mapStateToProps = ({serviceCategory}) => {
  return {
    list : serviceCategory.list
  };
};

const mapDispatchProps = (dispatch) => {
  return {
      getServiceCategoryList: bindActionCreators(ServiceCategoryActions.reqList, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchProps)(ShopServiceContainer);