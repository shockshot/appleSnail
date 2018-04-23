// import { SALES } from './ActionTypes.js';
import HttpHelper from '../helper/HttpHelper';

const loginUrl = '/api/sales';

export const SALES = {
  SEARCH: "SALES_SEARCH",
  REGISTER: "SALES_REGISTER",
  POST: "SALES_POST",
  PUT: "SALES_PUT",
  DELETE: "SALES_DELETE",
  GET: "SALES_GET"
}

export const searchSales = () => dispatch => {
	dispatch({type:SALES.SEARCH});
	return HttpHelper.post(loginUrl + '/search', {} ).then((response) => {
    console.log("sales req success");
    console.log('response', response);
		// dispatch(loginSuccess(response.data.token));
	}).catch(error => {
		console.log("sales req failed:", error);
		// dispatch(loginFailed())
	})
}
