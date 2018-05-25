import { HttpHelper, Logger } from 'helpers';
import { createAction } from 'redux-actions';
import uuid from 'uuid';
import {addMessage} from './ToastActions';

const serviceUrl = '/api/reservation'


export const RESERVATION = {
  LIST:         "RESERVATION.LIST_REQUEST",
  LIST_SUCCESS: "RESERVATION.LIST_SUCCESS",
  LIST_FAILURE: "RESERVATION.LIST_FAILURE",

  POST         : "RESERVATION.POST_REQUEST",
  POST_SUCCESS : "RESERVATION.POST_SUCCESS",
  POST_FAILURE : "RESERVATION.POST_FAILURE",
}


//request list
export const reqList = (criteria = {}) => (dispatch) => {
  dispatch(createAction(RESERVATION.LIST)());
  return HttpHelper.post(`${serviceUrl}/search`, criteria)
    .then(response => {
      if(response.data){
        const data = response.data.map(item => {
          return {
            ...item,
            uuid: uuid()
          }
        })
        dispatch(createAction(RESERVATION.LIST_SUCCESS)(data));
      }
    })
    .catch(err => {
      dispatch(createAction(RESERVATION.LIST_FAILURE)());
      Logger.error('error:', err);
    })
}


export const reqPost = (reservation) => dispatch => {
  dispatch(createAction(RESERVATION.POST)(reservation));
  return HttpHelper.post(serviceUrl, reservation)
    .then(response => {
      const data = response.data;
      data.uuid = uuid();
      dispatch(createAction(RESERVATION.POST_SUCCESS)(data));
      dispatch(addMessage('등록 성공'));
    })
    .catch(err => {
      dispatch(createAction(RESERVATION.POST_FAILURE)());
      Logger.error('error:', err);
    })
}