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
  [SERVICE.ADD]: (state, {payload}) => {
    return {
      ...state,
      list: [...state.list, payload]
    }
  },
  [SERVICE.EDIT]: (state, {payload}) => {
    const uuid = payload;
    const list = [...state.list];
    const idx = list.findIndex(item => item.uuid === uuid);
    list[idx].isEditting = true;
    return {
      ...state,
      list: list
    }
  },
  [SERVICE.CANCEL]: (state, {payload}) => {
    const uuid = payload;
    const list = [...state.list];
    const idx = list.findIndex(item => item.uuid === uuid);
    if(list[idx].serviceNo){
      list[idx].isEditting = false;
    }else{
      list.splice(idx,1);
    }
    return {
      ...state,
      list: list
    }
  },
}, initialState);

