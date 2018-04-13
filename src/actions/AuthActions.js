import {AUTH} from './ActionTypes.js';

export const login(userId, password){
	return {
		type: AUTH.LOGIN,
		userId,
		password
	}
}

export const logout(){
	return {
		type: AUTH.LOGOUT
	}
}