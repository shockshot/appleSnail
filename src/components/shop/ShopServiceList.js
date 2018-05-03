import React , { Component } from 'react';
import { Button } from 'reactstrap';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPlus, faSpinner, faSearch } from '@fortawesome/fontawesome-free-solid';

class ShopServiceList extends Component {

  render(){
    return(
      <div>
        <ul>
        {this.props.list ? this.props.list.map(serviceCategory => (
          <li key={serviceCategory.serviceCategoryNo}>
            <span>{serviceCategory.serviceCategoryName}</span>
            {serviceCategory.Services.length>0 ? (
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

        <Button>
            <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
    )
  }


}

export default ShopServiceList;