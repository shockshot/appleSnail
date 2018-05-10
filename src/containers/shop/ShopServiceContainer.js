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
import { Logger } from 'helpers';

// import { Logger } from 'helpers';

class ShopServiceContainer extends Component {

  constructor(props){
    super(props);

    this.props.getServiceCategoryList();
  }

  handleSubmit = (serviceCategory) => {
    // Logger.debug('serviceCategory', serviceCategory);
    if(serviceCategory.serviceCategoryNo){//put
      this.props.putServiceCategory(serviceCategory);
    }else{ // post
      this.props.postServiceCategory(serviceCategory);
    }

  }

  render(){
    return(
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>서비스관리</BreadcrumbItem>
        </Breadcrumb>

        <ShopServiceList 
          list={this.props.list} 
          onSubmit={this.handleSubmit}
          onEdit={this.props.editServiceCategory}
          onCancel={this.props.cancelServiceCategory}
          onDelete={this.props.delServiceCategory}/>

        <Button className="btn-circle" onClick={this.props.addNewServiceCategory}>
          <FontAwesomeIcon icon={faPlus}/>
        </Button>
      </div>
    )
  }

}


// export default SalesDetailContainer;
const mapStateToProps = ({serviceCategory}) => {
  // Logger.debug('state', serviceCategory.list);
  return {
    list : serviceCategory.list
  };
};

const mapDispatchProps = (dispatch) => {
  return {
      getServiceCategoryList: bindActionCreators(ServiceCategoryActions.reqList, dispatch),
      addNewServiceCategory: bindActionCreators(ServiceCategoryActions.add, dispatch),
      editServiceCategory: bindActionCreators(ServiceCategoryActions.edit, dispatch),
      cancelServiceCategory: bindActionCreators(ServiceCategoryActions.cancel, dispatch),
      postServiceCategory: bindActionCreators(ServiceCategoryActions.reqPost, dispatch),
      putServiceCategory: bindActionCreators(ServiceCategoryActions.reqPut, dispatch),
      delServiceCategory: bindActionCreators(ServiceCategoryActions.reqDel, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(ShopServiceContainer);