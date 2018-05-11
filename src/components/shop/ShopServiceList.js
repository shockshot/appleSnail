import React , { Component } from 'react';

import { faPlus, faSpinner, faSearch } from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Button } from 'reactstrap';

import ServiceCategoryForm from 'components/shop/ServiceCategoryForm';
import ServiceForm from 'components/shop/ServiceForm';

import { Logger } from 'helpers';
import uuid from 'uuid';

const ShopServiceList = (props) => 
<div>
  <ul>
  {props.serviceCategoryList ? props.serviceCategoryList.map(serviceCategory => (
    <li key={uuid()}>
      {/* <span>{serviceCategory.serviceCategoryName}</span> */}
      <ServiceCategoryForm 
        onSubmit={serviceCategory.serviceCategoryNo ? props.onServiceCategoryActions.reqPut : props.onServiceCategoryActions.reqPost} 
        onDelete={props.onServiceCategoryActions.reqDel}
        onEdit={props.onServiceCategoryActions.edit}
        onCancel={props.onServiceCategoryActions.cancel}
        serviceCategory={serviceCategory} />

        <ul>
          {props.serviceList.filter(service=>service.serviceCategoryNo===serviceCategory.serviceCategoryNo).map(service => (
            <li key={uuid()}>
              {/* {service.serviceName}, {service.price} */}
              <ServiceForm 
                service={service}
                onSubmit={service.serviceNo? props.onServiceActions.reqPut : props.onServiceActions.reqPost}
                onEdit={props.onServiceActions.edit}
                onCancel={props.onServiceActions.cancel}
                onDelett={props.onServiceActions.reqDel}/>
            </li>
          ))}
        </ul>

        {serviceCategory.serviceCategoryNo ? (
        <Button className="btn-circle" onClick={()=>props.onServiceActions.add(serviceCategory.serviceCategoryNo)}>
          <FontAwesomeIcon icon={faPlus}/>
        </Button>
        ) : ''}
      
    </li>
  )) : ''}
  </ul>
  
</div>


export default ShopServiceList;