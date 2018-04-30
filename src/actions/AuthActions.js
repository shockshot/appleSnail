import { history, HttpHelper, Logger } from 'helpers';
import jwt from 'jsonwebtoken';
import { createAction } from 'redux-actions';

const loginUrl = '/api/users';

export const AUTH = {
  LOGIN:             "AUTH.LOGIN_REQUEST",
  LOGIN_SUCCESS:     "AUTH.LOGIN_SUCCESS",
  LOGIN_FAILURE:     "AUTH.LOGIN_FAILURE",
	LOGOUT:            "AUTH.LOGOUT",

}

/** 로그인 */
export const reqLogin = (userId, password) => dispatch => {
	dispatch({
		type:AUTH.LOGIN,
		payload: {
			userId, password
		}
	});
	return HttpHelper.post(loginUrl + '/login', {
		userId, 
		password
	}, false).then((response) => {
		Logger.debug("login req success");
		dispatch(loginSuccess(response.data));
		history.push('/');
	}).catch(error => {
		Logger.debug("login req failed:", error);
		dispatch({
			type: AUTH.LOGIN_FAILURE
		});
	})
}

export const loginSuccess = ({Authorization, user}) => {
	const userInfo = jwt.decode(Authorization);
	return {
		type: AUTH.LOGIN_SUCCESS,
		payload: {
			userNo: userInfo.no,
			userId: userInfo.id,
			userName: userInfo.nm,
			Authorization
		}
	}
}

export const logout = () => {
	return {
		type: AUTH.LOGOUT
	}
}
