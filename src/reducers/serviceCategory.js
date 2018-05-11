import { SERVICE_CATEGORY } from 'actions/ServiceCategoryActions';
import { handleActions } from 'redux-actions';

const initialState = {};

export default handleActions({
  [SERVICE_CATEGORY.LIST]: (state, {payload}) => {
    return {
      ...state,
      ...payload
    }
  },
  [SERVICE_CATEGORY.LIST_SUCCESS]: (state, {payload}) => {
    return {
      ...state,
      list: payload
    }
  },
  [SERVICE_CATEGORY.LIST_FAILURE]: (state, {payload}) => {
    return {
      ...state,
      ...payload
    }
  },
  [SERVICE_CATEGORY.ADD]: (state, {payload}) => {
    return {
      ...state,
      list: [...state.list, payload]
    }
  },
  [SERVICE_CATEGORY.EDIT]: (state, {payload}) => {
    const uuid = payload;
    const list = [...state.list];
    const idx = list.findIndex(item => item.uuid === uuid);
    list[idx].isEditting = true;
    return {
      ...state,
      list: list
    }
  },
  [SERVICE_CATEGORY.CANCEL]: (state, {payload}) => {
    const uuid = payload;
    const list = [...state.list];
    const idx = list.findIndex(item => item.uuid === uuid);
    if(list[idx].serviceCategoryNo){
      list[idx].isEditting = false;
    }else{
      list.splice(idx,1);
    }
    return {
      ...state,
      list: list
    }
  },
  [SERVICE_CATEGORY.POST]: (state, action) => state,
  [SERVICE_CATEGORY.POST_SUCCESS]: (state, {payload}) => {
    const list = [...state.list];
    const serviceCategory = payload;
    serviceCategory.isEditting = false;
    const idx = list.findIndex(item => item.uuid === serviceCategory.uuid);
    list[idx] = serviceCategory;
    return {
      ...state,
      list: list
    }
  },
  [SERVICE_CATEGORY.POST_FAILURE]: (state, action) => state,

  [SERVICE_CATEGORY.PUT]: (state, action) => state,
  [SERVICE_CATEGORY.PUT_SUCCESS]: (state, {payload}) => {
    const list = [...state.list];
    const serviceCategory = payload;
    const idx = list.findIndex(item => item.uuid === serviceCategory.uuid);
    serviceCategory.isEditting = false;
    list[idx] = serviceCategory;
    return {
      ...state,
      list: list
    }
  },
  [SERVICE_CATEGORY.PUT_FAILURE]: (state, action) => state,

  [SERVICE_CATEGORY.DEL]: (state, action) => state,
  [SERVICE_CATEGORY.DEL_SUCCESS]: (state, {payload}) => {
    const list = [...state.list];
    const serviceCategory = payload;
    const idx = list.findIndex(item => item.uuid === serviceCategory.uuid);
    list.splice(idx,1);
    return {
      ...state,
      list:list
    }
  },
  [SERVICE_CATEGORY.DEL_FAILURE]: (state, action) => state,
}, initialState);

