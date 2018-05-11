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

  [SERVICE.POST]: (state, action) => state,
  [SERVICE.POST_SUCCESS]: (state, {payload}) => {
    const list = [...state.list];
    const service = payload;
    service.isEditting = false;
    const idx = list.findIndex(item => item.uuid === service.uuid);
    list[idx] = service;
    return {
      ...state,
      list: list
    }
  },
  [SERVICE.POST_FAILURE]: (state, action) => state,

  [SERVICE.PUT]: (state, action) => state,
  [SERVICE.PUT_SUCCESS]: (state, {payload}) => {
    const list = [...state.list];
    const service = payload;
    const idx = list.findIndex(item => item.uuid === service.uuid);
    service.isEditting = false;
    list[idx] = service;
    return {
      ...state,
      list: list
    }
  },
  [SERVICE.PUT_FAILURE]: (state, action) => state,

  [SERVICE.DEL]: (state, action) => state,
  [SERVICE.DEL_SUCCESS]: (state, {payload}) => {
    const list = [...state.list];
    const service = payload;
    const idx = list.findIndex(item => item.uuid === service.uuid);
    list.splice(idx,1);
    return {
      ...state,
      list:list
    }
  },
  [SERVICE.DEL_FAILURE]: (state, action) => state,
}, initialState);

