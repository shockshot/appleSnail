import { REGISTER } from 'actions/RegisterActions';
import { handleActions } from 'redux-actions';

const initialState = {};

export default handleActions({
  [REGISTER.ID_CHECK] : (state, action) => {
    return {
      ...state,
      userId: action.payload.userId,
      duplicatedCheck: null
    }
  },
	[REGISTER.ID_CHECK_SUCCESS] : (state, action) => {
    return {
      ...state,
      userId: action.payload.userId,
      duplicatedCheck: action.payload.ok
    }
  },
  [REGISTER.ID_CHECK_FAILURE] : (state, action) => {
    return {
      ...state,
      userId: action.payload.userId,
      duplicatedCheck: false
    }
  },

	[REGISTER.USER] : (state, action) => {
    return {
      ...state,
      ...action.payload,
      status: 0
    }
  },
	[REGISTER.USER_SUCCESS] : (state, {payload}) => {
    return {
      ...state,
      userId: payload.userId,
      userName: payload.userName,
      userNo: payload.userNo,
      password: null,
      status: 1
    }
  },
	[REGISTER.USER_FAILURE] : (state, action) => {
    return {
      ...state,
      status: -1
    }
  },

  [REGISTER.COMPANY] : (state, action) => {
    return {
      ...state,
      ...action.payload,
      status: 0
    }
  },
	[REGISTER.COMPANY_SUCCESS] : (state, {payload}) => {
    return {
      ...state,
      status: 1
    }
  },
	[REGISTER.COMPANY_FAILURE] : (state, action) => {
    return {
      ...state,
      status: -1
    }
  },

}, initialState);