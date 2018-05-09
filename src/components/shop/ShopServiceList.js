import React , { Component } from 'react';
import { faPlus, faSpinner, faSearch } from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Button } from 'reactstrap';
import ServiceCategoryForm from 'components/shop/ServiceCategoryForm';
import { Logger } from 'helpers';
import v4 from 'uuid';

class ShopServiceList extends Component {

  render(){
    return(
      <div>
        <ul>
        {this.props.list ? this.props.list.map(serviceCategory => (
          <li key={v4()}>
            {/* <span>{serviceCategory.serviceCategoryName}</span> */}
            <ServiceCategoryForm 
              onSubmit={this.props.onSubmit} 
              onDelete={this.props.onDelete}
              serviceCategory={serviceCategory} />
              
            {serviceCategory.Services && serviceCategory.Services.length>0 ? (
              <ul>
                {serviceCategory.Services.map(service => (
                  <li key={service.serviceNo}>
                    {service.serviceName}, {service.price}
                  </li>
                ))}
              </ul>
            ): ''}
          </li>
        )) : ''}
        </ul>
        
      </div>
    )
  }


}

export default ShopServiceList;