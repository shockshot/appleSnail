// import {AUTH} from './ActionTypes.js';
// import axios from 'axios';
import HttpHelper from '../helper/HttpHelper';
import jwt from 'jsonwebtoken';
import {history} from '../helper/history';
// import { createBrowserHistory } from 'history';
// const history = createBrowserHistory();

const loginUrl = '/api/users/login';

export const AUTH = {
  LOGIN: "AUTH_LOGIN",
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
		dispatch(loginFailed())
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

const loginFailed= () => {
	return {
		type: AUTH.LOGIN_FAILURE,
		userId: null,
		Authorization: null
	}
}

export const logout = () => {
	return {
		type: AUTH.LOGOUT,
		userId: null,
		Authorization: null
	}
}