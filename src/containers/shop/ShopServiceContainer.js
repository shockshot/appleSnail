import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

/**components */
import ShopServiceList from 'components/shop/ShopServiceList';

import { Button } from 'reactstrap';
import { faPlus } from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


// import ServiceCategoryForm from 'components/shop/ServiceCategoryForm';

import * as ServiceCategoryActions from 'actions/ServiceCategoryActions';
import * as ServiceActions from 'actions/ServiceActions';

import { Logger } from 'helpers';

// import { Logger } from 'helpers';

class ShopServiceContainer extends Component {

  constructor(props){
    super(props);

    this.props.serviceCategoryActions.reqList();
    this.props.serviceActions.reqList();
  }

  render(){
    return(
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>서비스관리</BreadcrumbItem>
        </Breadcrumb>

        <ShopServiceList 
          serviceCategoryList={this.props.serviceCategoryList} 
          onServiceCategoryActions={this.props.serviceCategoryActions}
          serviceList={this.props.serviceList}          
          onServiceActions={this.props.serviceActions}
          />

        <Button className="btn-circle" onClick={this.props.serviceCategoryActions.add}>
          <FontAwesomeIcon icon={faPlus}/>
        </Button>
      </div>
    )
  }
}

// export default SalesDetailContainer;
const mapStateToProps = ({serviceCategory, service}) => {
  return {
    serviceCategoryList : serviceCategory.list,
    serviceList: service.list
  };
};

const mapDispatchProps = (dispatch) => {
  return {
      serviceCategoryActions: bindActionCreators(ServiceCategoryActions, dispatch),
      serviceActions: bindActionCreators(ServiceActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchProps)(ShopServiceContainer);