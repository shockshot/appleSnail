// import { SALES } from './ActionTypes.js';
import HttpHelper from '../helper/HttpHelper';
import { DateUtils } from '../utils/DateUtils';

const loginUrl = '/api/sales';

export const SALES = {
  SEARCH:         "SALES_SEARCH_REQUEST",
  SEARCH_SUCCESS: "SAELS_SEARCH_SUCCESS",
  SEARCH_FAIL:    "SAELS_SEARCH_FAILURE",

  REGISTER:       "SALES_REGISTER",
  POST:           "SALES_POST",
  PUT:            "SALES_PUT",
  DELETE:         "SALES_DELETE",
  GET:            "SALES_GET"
}

export const defaultSearchCondition = {
  searchFrom : DateUtils.format(new Date(), 'yyyyMMdd'),
  searchTo : DateUtils.format(new Date(), 'yyyyMMdd')
}

export const search = (searchCondition = defaultSearchCondition) => dispatch => {
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
