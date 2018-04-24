import HttpHelper from '../helper/HttpHelper';
import jwt from 'jsonwebtoken';
import {history} from '../helper/history';

const loginUrl = '/api/users/login';

export const AUTH = {
  LOGIN: "AUTH_LOGIN_REQUEST",
  LOGIN_SUCCESS: "AUTH_LOGIN_SUCCESS",
  LOGIN_FAILURE: "AUTH_LOGIN_FAILURE",
  LOGOUT: "AUTH_LOGOUT"
}


export const login = (userId, password) => dispatch => {
	dispatch({type:AUTH.LOGIN});
	return HttpHelper.post(loginUrl, {
		userId, 
		password
	}, false).then((response) => {
		console.log("login req success");
		dispatch(loginSuccess(response.data.token));
		history.push('/');
	}).catch(error => {
		console.log("login req failed:", error);
		dispatch({
			type: AUTH.LOGIN_FAILURE,
			userId: null,
			Authorization: null
		});
	})
}

const loginSuccess = (token) => {
	const userInfo = jwt.decode(token);
	// console.log(userInfo);
	return {
		type: AUTH.LOGIN_SUCCESS,
		userId: userInfo.id,
		Authorization: token
	}
}

export const logout = () => {
	return {
		type: AUTH.LOGOUT,
		userId: null,
		Authorization: null
	}
}