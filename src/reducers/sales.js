// import { combineReducers } from 'redux';
import { SALES, defaultSearchCondition } from 'actions/SalesActions';
import { handleActions } from 'redux-actions';
// import { DateUtils } from '../utils/DateUtils';

const initialState = {
  searchCondition: defaultSearchCondition,
  dataList: [],
  salesNo: null,
  salesData: null
};


export default handleActions({
  //목록
  ///////////////////////////////////////////////
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


  //개별
  ///////////////////////////////////////////////
  [SALES.GET]: (state, action) => {
    //조회
    return {
      ...state,
      salesNo: action.payload.salesNo,
      salesData: []
    }
  },
  [SALES.GET_SUCCESS]: (state, action) => {
    //조회
    if(action.payload){
      return {
        ...state,
        salesNo: action.payload.salesNo,
        salesData: action.payload.salesData
      }
    //신규
    }else {
      return {
        ...state,
        salesNo: null,
        salesData: null
      }
    }
  },
  //실패
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