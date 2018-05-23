/** 고객 관리 actions */

import { HttpHelper, Logger } from 'helpers';
import { createAction } from 'redux-actions';
import uuid from 'uuid';
import {addMessage} from './ToastActions';

const serviceUrl = '/api/customer'

//actions
export const CUSTOMER = {
  LIST         : "CUSTOMER.LIST_REQUEST",
  LIST_SUCCESS : "CUSTOMER.LIST_SUCCESS",
  LIST_FAILURE : "CUSTOMER.LIST_FAILURE",

  POST         : "CUSTOMER.POST_REQUEST",
  POST_SUCCESS : "CUSTOMER.POST_SUCCESS",
  POST_FAILURE : "CUSTOMER.POST_FAILURE",

  DEL         : "CUSTOMER.DEL_REQUEST",
  DEL_SUCCESS : "CUSTOMER.DEL_SUCCESS",
  DEL_FAILURE : "CUSTOMER.DEL_FAILURE",
  
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


export const reqPost = (customer) => (dispatch) => {
  dispatch(createAction(CUSTOMER.POST)());
  return HttpHelper.post(serviceUrl, customer)
  .then(response => {
    if(response.data){
      const data = response.data;
      data.uuid = uuid();
      dispatch(createAction(CUSTOMER.POST_SUCCESS)(data));
      dispatch(addMessage('등록 성공'));
    }
  })
  .catch(err => {
    dispatch(createAction(CUSTOMER.POST_FAILURE)());
    Logger.error('error:', err);
  })
}



export const reqDel = (customer) => (dispatch) => {

  dispatch(createAction(CUSTOMER.DEL)());
  return HttpHelper.delete( `${serviceUrl}/${customer.customerNo}`)
  .then(response => {
    if(response.data.success){
      dispatch(createAction(CUSTOMER.DEL_SUCCESS)(customer.uuid));
      dispatch(addMessage('삭제 성공'));
    }
  })
  .catch(err => {
    dispatch(createAction(CUSTOMER.DEL_FAILURE)());
    Logger.error('error:', err);
  })
}