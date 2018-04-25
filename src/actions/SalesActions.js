// import { SALES } from './ActionTypes.js';
import HttpHelper from 'helpers/HttpHelper';
import { DateUtils } from 'utils/DateUtils';

const salesUrl = '/api/sales';

export const SALES = {
  SEARCH:             "SALES.SEARCH_REQUEST",
  SEARCH_SUCCESS:     "SAELS.SEARCH_SUCCESS",
  SEARCH_FAIL:        "SAELS.SEARCH_FAILURE",

  GET:                "SALES.GET_REQUEST",
  GET_SUCCESS:        "SALES.GET_SUCCESS",
  GET_FAIL:           "SALES.GET_FAILURE",

  REGISTER:           "SALES.REGISTER_REQUEST",
  REGISTER_SUCCESS:   "SALES.REGISTER_SUCCESS",
  REGISTER_FAILURE:   "SALES.REGISTER_FAILURE",

  POST:           "SALES_POST",
  PUT:            "SALES_PUT",
  DELETE:         "SALES_DELETE",
  
}

export const defaultSearchCondition = {
  searchFrom : DateUtils.format(new Date(), 'yyyyMMdd'),
  searchTo : DateUtils.format(new Date(), 'yyyyMMdd')
}

/** 매출 여러건 조회 */
export const search = (searchCondition = defaultSearchCondition) => dispatch => {
	dispatch({
    type:SALES.SEARCH,
    payload: {
      searchCondition: searchCondition
    }
  });
	return HttpHelper.post(salesUrl + '/search', {} ).then((response) => {
    console.log("sales req success");
		dispatch({
      type: SALES.SEARCH_SUCCESS,
      payload: {
        searchCondition: searchCondition,
        dataList: response.data
      }
    });
	}).catch(error => {
		console.log("sales req failed:", error);
		dispatch({
      type: SALES.SEARCH_FAIL,
      payload: {
        searchCondition: searchCondition,
      }
    });
	})
}


/**매출 단건 조회. salesNo 를 넘기지 않을 경우 신규  */
export const getSale = ( salesNo ) => dispatch => {
  dispatch({
    type:SALES.GET,
    payload:{
      salesNo: salesNo
    }
  });

  return HttpHelper.get(`${salesUrl}/${salesNo}`).then((response) => {
    console.log("getSale success");
    dispatch({
      type: SALES.GET_SUCCESS,
      payload: {
        salesNo: salesNo,
        salesData: response.data
      }
    });
  }).catch(error => {
    console.log("getSale failed:", error);
    dispatch({
      type: SALES.GET_FAIL,
      payload: {
        salesNo: salesNo
      }
    });
  }); 
}

export const newSale = () => {
  return {type: SALES.GET_SUCCESS}
};

// export const searchSuccess
