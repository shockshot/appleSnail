import Logger from 'helpers/Logger';
import HttpHelper from 'helpers/HttpHelper';
import {history} from 'helpers/history';
import jwt from 'jsonwebtoken';


const loginUrl = '/api/users/login';

export const AUTH = {
  LOGIN:         "AUTH.LOGIN_REQUEST",
  LOGIN_SUCCESS: "AUTH.LOGIN_SUCCESS",
  LOGIN_FAILURE: "AUTH.LOGIN_FAILURE",
  LOGOUT:        "AUTH.LOGOUT"
}


export const login = (userId, password) => dispatch => {
	dispatch({
		type:AUTH.LOGIN,
		payload: {
			userId, password
		}
	});
	return HttpHelper.post(loginUrl, {
		userId, 
		password
	}, false).then((response) => {
		Logger.debug("login req success");
		dispatch(loginSuccess(response.data.token));
		history.push('/');
	}).catch(error => {
		Logger.debug("login req failed:", error);
		dispatch({
			type: AUTH.LOGIN_FAILURE
		});
	})
}

const loginSuccess = (token) => {
	const userInfo = jwt.decode(token);
	return {
		type: AUTH.LOGIN_SUCCESS,
		payload: {
			userId: userInfo.id,
			Authorization: token
		}
	}
}

export const logout = () => {
	return {
		type: AUTH.LOGOUT
	}
}