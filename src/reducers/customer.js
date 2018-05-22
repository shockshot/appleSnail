import {CUSTOMER} from 'actions/CustomerActions';
import { handleActions } from 'redux-actions';

const initialState = {}

export default handleActions({
  [CUSTOMER.LIST]: (state, {payload}) => {
    return {
      ...state,
      ...payload
    }
  },
  [CUSTOMER.LIST_SUCCESS]: (state, {payload}) => {
    return {
      ...state,
      list: payload
    }
  },
  [CUSTOMER.LIST_FAILURE]: (state, {payload}) => {
    return {
      ...state,
      ...payload
    }
  },

  [CUSTOMER.POST]: (state, action) => state,
  [CUSTOMER.POST_SUCCESS]: (state, {payload}) => {
    return {
      ...state,
      list: [...state.list, payload]
    }
  },
  [CUSTOMER.POST_FAILURE]: (state, action) => state,

  [CUSTOMER.DEL]: (state, action) => state,
  [CUSTOMER.DEL_SUCCESS]: (state, {payload}) => {
    const list = [...state.list];
    const idx = list.findIndex(item => item.uuid === payload);
    list.splice(idx,1);
    return {
      ...state,
      list:list
    }
  },
  [CUSTOMER.DEL_FAILURE]: (state, action) => state,


}, initialState);