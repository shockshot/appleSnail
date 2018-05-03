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
  }
}, initialState);

