import { history, HttpHelper, Logger } from 'helpers';
import jwt from 'jsonwebtoken';
import { createAction, handleActions } from 'redux-actions';


const loginUrl = '/api/users';

export const AUTH = {
  LOGIN:             "AUTH.LOGIN_REQUEST",
  LOGIN_SUCCESS:     "AUTH.LOGIN_SUCCESS",
  LOGIN_FAILURE:     "AUTH.LOGIN_FAILURE",
	LOGOUT:            "AUTH.LOGOUT",
	
	REGISTER :         "AUTH.REGISTER_REQUEST",
	REGISTER_SUCCESS : "AUTH.REGISTER_SUCCESS",
	REGISTER_FAILURE : "AUTH.REGISTER_FAILURE",

	ID_CHECK         : "AUTH.ID_CHECK_REQUEST",
	ID_CHECK_SUCCESS : "AUTH.ID_CHECK_SUCCESS",
	ID_CHECK_FAILURE : "AUTH.ID_CHECK_FAILURE",

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

export const reqIdCheck = (userId) => dispatch => {
	const reqUrl = `${loginUrl}/duplicateCheck/${userId}`;
	dispatch(idCheck({userId}));
	return HttpHelper.get(reqUrl, false ).then(res => {
		Logger.debug('duplicated check res:', res);
		dispatch({
			type: AUTH.ID_CHECK_SUCCESS,
			payload: res.data
		});
	}).catch(err => {
		Logger.debug('duplicated check res:', err);
		dispatch({type: AUTH.ID_CHECK_FAILURE})
	})
}

export const reqRegister = (formContent) => dispatch => {
	const reqUrl = `${loginUrl}/`;
	dispatch(register(formContent));
	//request todo.....
}

export const idCheck  = createAction(AUTH.ID_CHECK);
export const register = createAction(AUTH.REGISTER);