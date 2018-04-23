// import { combineReducers } from 'redux';
import { SALES } from '../actions/SalesActions';
import { handleActions } from 'redux-actions';
import { DateUtils } from '../utils/DateUtils';

const initialState = {
  searchCondition: {
    searchFrom: DateUtils.format(new Date(), 'yyyyMMdd'),
    searchTo: DateUtils.format(new Date(), 'yyyyMMdd')
  },
  dataList: []
};

export default handleActions({
  [SALES.SEARCH_CONDITION]: (state, action) => {
    return {
      searchCondition: action.searchCondition,
      dataList: state.dataList
    }
  },
  [SALES.SEARCH_SUCCESS]: (state, action) => {
    return {
      searchCondition: action.searchCondition,
      dataList : action.dataList
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