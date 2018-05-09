import { SERVICE_CATEGORY } from 'actions/ServiceCategoryActions';
import { handleActions } from 'redux-actions';
import v4 from 'uuid';

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
      list: payload.map(item => {
        return {
          ...item,
          uuid: v4()
        }
      })
    }
  },
  [SERVICE_CATEGORY.LIST_FAILURE]: (state, {payload}) => {
    return {
      ...state,
      ...payload
    }
  },
  [SERVICE_CATEGORY.ADD]: (state, action) => {
    return {
      ...state,
      list: [...state.list, {
        uuid: v4(),
        isEditting: true,
        serviceCategoryNo: null,
        serviceCategoryName: '',
        categoryDescription: '',

      }]
    }
  },
  [SERVICE_CATEGORY.POST]: (state, action) => state,
  [SERVICE_CATEGORY.POST_SUCCESS]: (state, action) => {
    return {
      ...state
    }
  },
  [SERVICE_CATEGORY.POST_FAILURE]: (state, action) => state,

  [SERVICE_CATEGORY.PUT]: (state, action) => state,
  [SERVICE_CATEGORY.PUT_SUCCESS]: (state, action) => state,
  [SERVICE_CATEGORY.PUT_FAILURE]: (state, action) => state,

  [SERVICE_CATEGORY.DEL]: (state, action) => state,
  [SERVICE_CATEGORY.DEL_SUCCESS]: (state, action) => state,
  [SERVICE_CATEGORY.DEL_FAILURE]: (state, action) => state,
}, initialState);

