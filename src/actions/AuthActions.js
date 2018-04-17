import {AUTH} from './ActionTypes.js';
import axios from 'axios';

const loginUrl = 'http://localhost:3000/api/users/login';

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
		console.log("★★",1);
		dispatch({
			type: AUTH.LOGIN_SUCCESS,
			userInfo: response
		})
	}).catch(error => {
		console.log("★★",2);
		dispatch({
			type: AUTH.LOGIN_FAILURE,
			userInfo: error
		})
	});

}

export const loginSuccess = (userInfo) => {
	return {
		type: AUTH.LOGIN_SUCCESS,
		...userInfo
	}
}

export const loginFail = (userInfo) => {
	return {
		type: AUTH.LOGIN_FAILURE,
		...userInfo
	}
}

export const logout = () => {
	return {
		type: AUTH.LOGOUT
	}
}