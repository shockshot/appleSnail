import { RESERVATION } from 'actions/ReservationActions';
import { handleActions } from 'redux-actions';

const initialState = {};

export default handleActions({
  [RESERVATION.LIST]: (state, {payload}) => {
    return {
      ...state,
      ...payload
    }
  },
  [RESERVATION.LIST_SUCCESS]: (state, {payload}) => {
    return {
      ...state,
      list: payload
    }
  },
  [RESERVATION.LIST_FAILURE]: (state, {payload}) => {
    return {
      ...state,
      ...payload
    }
  },
}, initialState)