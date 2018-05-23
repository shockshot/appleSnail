import { HttpHelper, Logger } from 'helpers';
import { createAction } from 'redux-actions';
import uuid from 'uuid';
import {addMessage} from './ToastActions';

const serviceUrl = '/api/reservation'


export const RESERVATION = {
  LIST:         "RESERVATION.LIST_REQUEST",
  LIST_SUCCESS: "RESERVATION.LIST_SUCCESS",
  LIST_FAILURE: "RESERVATION.LIST_FAILURE",
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