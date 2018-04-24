// import { combineReducers } from 'redux';
import { SALES, defaultSearchCondition } from '../actions/SalesActions';
import { handleActions } from 'redux-actions';
import { DateUtils } from '../utils/DateUtils';

const initialState = {
  searchCondition: {...defaultSearchCondition},
  dataList: []
};

export default handleActions({
  [SALES.SEARCH]: (state, action) => {
    return {
      searchCondition: action.searchCondition,
      dataList: []
    }
  },
  [SALES.SEARCH_SUCCESS]: (state, action) => {
    return {
      searchCondition: action.searchCondition,
      dataList : action.dataList
    }
  },
  [SALES.SEARCH_FAIL]: (state, action) => {
    return {
      searchCondition: action.searchCondition,
      dataList : state.dataList
    }
  },
  [SALES.REGISTER]: (state, action) => {},
  [SALES.POST]: (state, action) => {},
  [SALES.PUT]: (state, action) => {},
  [SALES.DELETE]: (state, action) => {},
  [SALES.GET]: (state, action) => {},
}, initialState);

// export default combineReducers({ 
// 	login
// });