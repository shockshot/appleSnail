import { SERVICE } from 'actions/ServiceActions';
import { handleActions } from 'redux-actions';

const initialState = {};

export default handleActions({
  [SERVICE.LIST]: (state, {payload}) => {
    return {
      ...state,
      ...payload
    }
  },
  [SERVICE.LIST_SUCCESS]: (state, {payload}) => {
    return {
      ...state,
      list: payload
    }
  },
  [SERVICE.LIST_FAILURE]: (state, {payload}) => {
    return {
      ...state,
      ...payload
    }
  },
}, initialState);

