import { history, HttpHelper, Logger } from 'helpers';
import { createAction } from 'redux-actions';
import { loginSuccess } from './AuthActions';

const registerUrl = '/api/register';

export const REGISTER = {

  USER :           "REGISTER.USER_REQUEST",
	USER_SUCCESS :   "REGISTER.USER_SUCCESS",
	USER_FAILURE :   "REGISTER.USER_FAILURE",

	ID_CHECK         : "REGISTER.ID_CHECK_REQUEST",
	ID_CHECK_SUCCESS : "REGISTER.ID_CHECK_SUCCESS",
	ID_CHECK_FAILURE : "REGISTER.ID_CHECK_FAILURE",

  COMPANY         : "REGISTER.COMPANY_REQUEST",
  COMPANY_SUCCESS : "REGISTER.COMPANY_SUCCESS",
  COMPANY_FAILURE : "REGISTER.COMPANY_FAILURE"
}

/** ID 등록 체크 request */
export const reqIdCheck = (userId) => dispatch => {
	const reqUrl = `${registerUrl}/duplicateCheck/${userId}`;
	dispatch(idCheck({userId}));
	return HttpHelper.get(reqUrl, false ).then(res => {
		Logger.debug('duplicated check res:', res);
		dispatch(createAction(REGISTER.ID_CHECK_SUCCESS)(res.data));
	}).catch(err => {
		Logger.debug('duplicated check res:', err);
		dispatch({type: REGISTER.ID_CHECK_FAILURE})
	})
}

/** User 등록 request */
export const reqRegisterUser = (formContent) => dispatch => {
	const reqUrl = `${registerUrl}/user`;
	dispatch(registerUser(formContent));
	return HttpHelper.post(reqUrl, formContent, false ).then(res => {
    dispatch(createAction(REGISTER.USER_SUCCESS)(res.data));
    dispatch(loginSuccess(res.data));

		//res.status === 200
		history.push('/register/success')
		Logger.debug('res', res.data);

	}).catch(err => {
		dispatch({type: REGISTER.USER_FAILURE});
		Logger.error('auth register failed.', err);
	})
}


/** Company, Shop 동시 등록 request */
export const reqRegisterCompanyWithShop = ( formContent ) => dispatch => {
  const reqUrl = `${registerUrl}/companyWithShop`;
  dispatch(registerCompany( formContent ));
  return HttpHelper.post(reqUrl, formContent, true).then(res => {
    dispatch(createAction(REGISTER.COMPANY_SUCCESS)(res.data));

  }).catch(err => {
    dispatch(createAction(REGISTER.COMPANY_FAILURE)() );

  })

}


export const idCheck  = createAction(REGISTER.ID_CHECK);
export const registerUser = createAction(REGISTER.USER);
export const registerCompany = createAction(REGISTER.COMPANY);