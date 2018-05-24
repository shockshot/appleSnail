import React, {Component} from 'react';

import {ListGroupItem, ListGroup, Button/*, FormFeedback*/} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';

import {Logger} from 'helpers';
import uuid from 'uuid';
import {StringUtils} from 'utils';

import classNames from 'classnames/bind';
import styles from './CustomerSelector.scss';
const st = classNames.bind(styles);

const CustomerSelector = (props = []) => 
<div className={st('customerSelector') + (!props.isOpened?st(' hidden'):'') }>
  <ListGroup>
  {props.customerList.map(customer => 
    <ListGroupItem key={uuid()} onClick={e=>props.onSelectCustomer(customer)}>
      {customer.customerName} | {StringUtils.toPhoneNo(customer.phoneNumber)}
    </ListGroupItem>)}
  </ListGroup>
  <div className={st('buttonsContainer')}>
    <Button type="button" className="btn-circle-sm" onClick={props.onClose}>
      <FontAwesomeIcon icon={faTimes} />
    </Button>
  </div>
</div>

export default CustomerSelector;