/** 서비스 카테고리 관리 actions */

import { HttpHelper, Logger } from 'helpers';
import { createAction } from 'redux-actions';
import uuid from 'uuid';
import {addMessage} from './ToastActions';

const serviceUrl = '/api/service'


export const SERVICE = {
  LIST         : "SERVICE.LIST_REQUEST",
  LIST_SUCCESS : "SERVICE.LIST_SUCCESS",
  LIST_FAILURE : "SERVICE.LIST_FAILURE",

  ADD          : "SERVICE.ADD",
  EDIT         : "SERVICE.EDIT",
  CANCEL       : "SERVICE.CANCEL",

  POST         : "SERVICE.POST_REQUEST",
  POST_SUCCESS : "SERVICE.POST_SUCCESS",
  POST_FAILURE : "SERVICE.POST_FAILURE",

  PUT          : "SERVICE.PUT_REQUEST",
  PUT_SUCCESS  : "SERVICE.PUT_SUCCESS",
  PUT_FAILURE  : "SERVICE.PUT_FAILURE",

  DEL          : "SERVICE.DEL_REQUEST",
  DEL_SUCCESS  : "SERVICE.DEL_SUCCESS",
  DEL_FAILURE  : "SERVICE.DEL_FAILURE"
}

//request list
export const reqList = () => (dispatch) => {
  dispatch(createAction(SERVICE.LIST)());
  return HttpHelper.get(serviceUrl)
    .then(response => {
      if(response.data){
        const data = response.data.map(item => {
          return {
            ...item,
            uuid: uuid()
          }
        })
        dispatch(createAction(SERVICE.LIST_SUCCESS)(data));
      }
    })
    .catch(err => {
      dispatch(createAction(SERVICE.LIST_FAILURE)());
      Logger.error('error:', err);
    })
}

//add new ServiceCategory
export const add = () => {
  return {
    type: SERVICE.ADD,
    payload: {
      uuid: uuid(),
      isEditting: true,
      serviceCategoryNo: null,
      serviceCategoryName: '',
      categoryDescription: '',
    }
  }
}
export const edit = createAction(SERVICE.EDIT);
export const cancel = createAction(SERVICE.CANCEL);

export const reqPost = (serviceCategory) => dispatch => {
  dispatch(createAction(SERVICE.POST)(serviceCategory));
  return HttpHelper.post(serviceUrl, serviceCategory)
    .then(response => {
      const data = response.data;
      data.uuid = serviceCategory.uuid;
      dispatch(createAction(SERVICE.POST_SUCCESS)(data));
      dispatch(addMessage('등록 성공'));
    })
    .catch(err => {
      dispatch(createAction(SERVICE.POST_FAILURE)());
      Logger.error('error:', err);
    })
}

//put request
export const reqPut = (serviceCategory) => dispatch => {
  dispatch(createAction(SERVICE.PUT)(serviceCategory));
  return HttpHelper.put(`${serviceUrl}/${serviceCategory.serviceCategoryNo}`, serviceCategory)
    .then(response => {
      Logger.debug('reqPut', response.data);
      if(response.data.success){
        dispatch(createAction(SERVICE.PUT_SUCCESS)(serviceCategory));
        dispatch(addMessage('수정 성공'));
      }else{
        dispatch(createAction(SERVICE.PUT_FAILURE)());
      }
    })
    .catch(err => {
      dispatch(createAction(SERVICE.PUT_FAILURE)());
      Logger.error('error:', err);
    })
}

export const reqDel = (serviceCategory) => dispatch => {
  dispatch(createAction(SERVICE.DEL)(serviceCategory));
  return HttpHelper.delete(`${serviceUrl}/${serviceCategory.serviceCategoryNo}`)
    .then(response => {
      if(response.data.success){
        dispatch(createAction(SERVICE.DEL_SUCCESS)(serviceCategory.uuid));
        dispatch(addMessage('삭제 성공'));
      }else{
        dispatch(createAction(SERVICE.DEL_FAILURE)());
      }
    })
    .catch(err => {
      dispatch(createAction(SERVICE.DEL_FAILURE)());
      console.log(err);
      // Logger.error('error:', err);
    })
}