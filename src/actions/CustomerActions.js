/** 고객 관리 actions */

import { HttpHelper, Logger } from 'helpers';
import { createAction } from 'redux-actions';
import uuid from 'uuid';
// import {addMessage} from './ToastActions';

const serviceUrl = '/api/customers'


export const CUSTOMER = {
  LIST         : "CUSTOMER.LIST_REQUEST",
  LIST_SUCCESS : "CUSTOMER.LIST_SUCCESS",
  LIST_FAILURE : "CUSTOMER.LIST_FAILURE",
}

//request list
export const reqList = (criteria = {}) => (dispatch) => {
  dispatch(createAction(CUSTOMER.LIST)());
  return HttpHelper.post(serviceUrl+'/search', criteria)
    .then(response => {
      if(response.data){
        const data = response.data.map(item => {
          return {
            ...item,
            uuid: uuid()
          }
        })
        dispatch(createAction(CUSTOMER.LIST_SUCCESS)(data));
      }
    })
    .catch(err => {
      dispatch(createAction(CUSTOMER.LIST_FAILURE)());
      Logger.error('error:', err);
    })
}