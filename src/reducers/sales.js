// import { combineReducers } from 'redux';
import { SALES, defaultSearchCondition } from '../actions/SalesActions';
import { handleActions } from 'redux-actions';
// import { DateUtils } from '../utils/DateUtils';

const initialState = {
  searchCondition: defaultSearchCondition,
  dataList: []
};


export default handleActions({
  [SALES.SEARCH]: (state, action) => {
    return {
      ...state,
      searchCondition: action.payload.searchCondition,
      dataList: []
    }
  },
  [SALES.SEARCH_SUCCESS]: (state, action) => {
    return {
      ...state,
      searchCondition: action.payload.searchCondition,
      dataList : action.payload.dataList
    }
  },
  [SALES.SEARCH_FAIL]: (state, action) => {
    return {
      ...state,
      searchCondition: action.searchCondition
    }
  },

  [SALES.GET]: (state, action) => {
    return {
      ...state,
      salesNo: action.payload.salesNo,
      salesData: []
    }
  },
  [SALES.GET_SUCCESS]: (state, action) => {
    return {
      ...state,
      salesNo: action.payload.salesNo,
      salesData: action.payload.salesData
    }
  },
  [SALES.GET_FAIL]: (state, action) => {
    return {
      ...state,
      salesNo: action.payload.salesNo
    }
  },
  [SALES.REGISTER]: (state, action) => {},
  [SALES.POST]: (state, action) => {},
  [SALES.PUT]: (state, action) => {},
  [SALES.DELETE]: (state, action) => {},
}, initialState);

// export default combineReducers({ 
// 	login
// });