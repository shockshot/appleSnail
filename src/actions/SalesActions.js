// import { SALES } from './ActionTypes.js';
import HttpHelper from '../helper/HttpHelper';

const loginUrl = '/api/sales';

export const SALES = {
  SEARCH_CONDITION: "SALES_SEARCH_CONDITION",

  SEARCH:         "SALES_SEARCH",
  SEARCH_SUCCESS: "SAELS_SEARCH_SUCCESS",
  SEARCH_FAIL:    "SAELS_SEARCH_FAIL",

  REGISTER:       "SALES_REGISTER",
  POST:           "SALES_POST",
  PUT:            "SALES_PUT",
  DELETE:         "SALES_DELETE",
  GET:            "SALES_GET"
}

export const setSearchCondition = (searchCondition = {}) => dispatch => {
  return {
    type:SALES.SEARCH_CONDITION,
    searchCondition: searchCondition
  };
}

export const search = (searchCondition = {}) => dispatch => {
	dispatch({
    type:SALES.SEARCH,
    searchCondition: searchCondition
  });
	return HttpHelper.post(loginUrl + '/search', {} ).then((response) => {
    console.log("sales req success");
		dispatch({
      type: SALES.SEARCH_SUCCESS,
      searchCondition: searchCondition,
      dataList: response.data
    });
	}).catch(error => {
		console.log("sales req failed:", error);
		dispatch({
      type: SALES.SEARCH_FAIL,
      searchCondition: searchCondition,
      dataList: []
    });
	})
}


// export const searchSuccess
