/** 서비스 카테고리 관리 actions */

import { HttpHelper, Logger } from 'helpers';
import { createAction } from 'redux-actions';

const serviceUrl = '/api/serviceCategory'

export const SERVICE_CATEGORY = {
  LIST         : "SERVICE_CATEGORY.LIST_REQUEST",
  LIST_SUCCESS : "SERVICE_CATEGORY.LIST_SUCCESS",
  LIST_FAILURE : "SERVICE_CATEGORY.LIST_FAILURE",

  ADD          : "SERVICE_CATEGORY.ADD",

  POST         : "SERVICE_CATEGORY.POST_REQUEST",
  POST_SUCCESS : "SERVICE_CATEGORY.POST_SUCCESS",
  POST_FAILURE : "SERVICE_CATEGORY.POST_FAILURE",

  PUT          : "SERVICE_CATEGORY.PUT_REQUEST",
  PUT_SUCCESS  : "SERVICE_CATEGORY.PUT_SUCCESS",
  PUT_FAILURE  : "SERVICE_CATEGORY.PUT_FAILURE",

  DEL          : "SERVICE_CATEGORY.DEL_REQUEST",
  DEL_SUCCESS  : "SERVICE_CATEGORY.DEL_SUCCESS",
  DEL_FAILURE  : "SERVICE_CATEGORY.DEL_FAILURE"
}

//request list
export const reqList = () => (dispatch) => {
  dispatch(createAction(SERVICE_CATEGORY.LIST)());
  return HttpHelper.get(serviceUrl)
    .then(response => {
      dispatch(createAction(SERVICE_CATEGORY.LIST_SUCCESS)(response.data));

    })
    .catch(err => {
      dispatch(createAction(SERVICE_CATEGORY.LIST_FAILURE)());
      Logger.error('error:', err);
    })
}

//add new ServiceCategory
export const add = createAction(SERVICE_CATEGORY.ADD);

export const reqPost = (serviceCategory) => dispatch => {
  dispatch(createAction(SERVICE_CATEGORY.POST)(serviceCategory));
  return HttpHelper.post(serviceUrl, serviceCategory)
    .then(response => {
      dispatch(createAction(SERVICE_CATEGORY.POST_SUCCESS)(response.data));

    })
    .catch(err => {
      dispatch(createAction(SERVICE_CATEGORY.POST_FAILURE)());
      Logger.error('error:', err);
    })
}

export const reqPut = (serviceCategory) => dispatch => {
  dispatch(createAction(SERVICE_CATEGORY.PUT)(serviceCategory));
  return HttpHelper.put(`${serviceUrl}/${serviceCategory.serviceCategoryNo}`, serviceCategory)
    .then(response => {
      dispatch(createAction(SERVICE_CATEGORY.PUT_SUCCESS)(response.data));

    })
    .catch(err => {
      dispatch(createAction(SERVICE_CATEGORY.PUT_FAILURE)());
      Logger.error('error:', err);
    })
}

export const reqDel = (serviceCategory) => dispatch => {
  dispatch(createAction(SERVICE_CATEGORY.DEL)(serviceCategory));
  return HttpHelper.delete(`${serviceUrl}/${serviceCategory.serviceCategoryNo}`)
    .then(response => {
      dispatch(createAction(SERVICE_CATEGORY.DEL_SUCCESS)(response.data));

    })
    .catch(err => {
      dispatch(createAction(SERVICE_CATEGORY.DEL_FAILURE)());
      console.log(err);
      // Logger.error('error:', err);
    })
}