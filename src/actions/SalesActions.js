// import { SALES } from './ActionTypes.js';
import HttpHelper from '../helper/HttpHelper';
import { DateUtils } from '../utils/DateUtils';

const salesUrl = '/api/sales';

export const SALES = {
  SEARCH:             "SALES_SEARCH_REQUEST",
  SEARCH_SUCCESS:     "SAELS_SEARCH_SUCCESS",
  SEARCH_FAIL:        "SAELS_SEARCH_FAILURE",

  GET:                "SALES_GET_REQUEST",
  GET_SUCCESS:        "SALES_GET_SUCCESS",
  GET_FAIL:           "SALES_GET_FAILURE",

  REGISTER:           "SALES_REGISTER_REQUEST",
  REGISTER_SUCCESS:   "SALES_REGISTER_SUCCESS",
  REGISTER_FAILURE:   "SALES_REGISTER_FAILURE",

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
export const getSale = ( salesNo = null) => dispatch => {
  dispatch({
    type:SALES.GET,
    payload:{
      salesNo: salesNo,
      salesData: null
    }
  });
  if(salesNo) {
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
          salesNo: salesNo,
          salesData: {}
        }
      });
    })
  }else{
    dispatch({ 
      type:SALES.GET_SUCCESS,
      payload: {}
    })
  }
}

// export const searchSuccess
