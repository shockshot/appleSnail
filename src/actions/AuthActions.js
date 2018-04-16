import {AUTH} from './ActionTypes.js';

export const login = (userId, password) => {
	console.log('loginAction', userId, password);
	return {
		type: AUTH.LOGIN,
		userId,
		password
	}
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