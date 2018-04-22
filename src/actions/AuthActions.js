import {AUTH} from './ActionTypes.js';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const loginUrl = '/api/users/login';

export const login = (userId, password) => dispatch => {
	console.log('loginAction', userId, password);
	// return {
	// 	type: AUTH.LOGIN,
	// 	userId,
	// 	password
	// }
	return axios.post(loginUrl, {
		userId, password
	}).then((response) => {
		console.log("login req success");
		dispatch(loginSuccess(response.data.token))
	}).catch(error => {
		console.log("login req failed:", error);
		dispatch(loginFail())
	})

}

export const loginSuccess = (token) => {
	const userInfo = jwt.decode(token);
	console.log(userInfo);
	return {
		type: AUTH.LOGIN_SUCCESS,
		userId: userInfo.id,
		Authorization: token
	}
}

export const loginFail = () => {
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