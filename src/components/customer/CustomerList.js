import React from 'react';
import CustomerItem from './CustomerItem';

import classNames from 'classnames/bind';
const styles = classNames.bind(require('./CustomerList.scss'));

const CustomerList = (props) => 
<ul className={styles('customerList')}>
  { props.dataList ? props.dataList.map(item => 
    <CustomerItem customer={item} key={item.uuid} onDelete={ e => props.onDelete(item)}/>
  ) : '등록된 고객이 없습니다.'}
</ul>

export default CustomerList;