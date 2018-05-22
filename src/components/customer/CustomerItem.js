import React from 'react';
// import uuid from 'uuid';
import { Badge, Button } from 'reactstrap';
import { StringUtils } from 'utils';

import { faTrashAlt, faMale, faFemale } from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
const styles = classNames.bind(require('./CustomerItem.scss'));


const CustomerItem = (props) => 
<li className={styles('customerItem')}>
  <div className={styles('buttons')}>
    <Button className={styles('hiddenBtn')+" btn-circle"} onClick={props.onDelete}>
      <FontAwesomeIcon icon={faTrashAlt}/>
    </Button>
  </div>
  <div>
    <h4 className={styles('customerName')}>
      <span className={styles('sex')}>
        {props.customer.sex === 'MALE' ? <FontAwesomeIcon icon={faMale} /> : <FontAwesomeIcon icon={faFemale} />}
      </span>
      {props.customer.customerName}
    </h4>
    <Badge>{props.customer.customerNo}</Badge>
    <span className={styles('phoneNumber')}>{StringUtils.toPhoneNo(props.customer.phoneNumber)} </span>
  </div>
  <div>
    <span>{StringUtils.toBirthDate(props.customer.birthDate)}</span>
    <div>
      {props.customer.remark}
    </div>
  </div>
</li>

export default CustomerItem;