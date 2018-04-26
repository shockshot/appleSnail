// import { combineReducers } from 'redux';
import { AUTH } from 'actions/AuthActions';
import { handleActions } from 'redux-actions';

const initialState = {isLogin: false};

export default handleActions({
  [AUTH.LOGIN]: (state, action) => {
    return {
      ...state,
      isLogin: false,
      userId: action.payload.userId
    }
  },
  [AUTH.LOGIN_SUCCESS]: (state, action) => {
    return {
      ...state,
      isLogin: true,
      userId: action.payload.userId,
      Authorization: action.payload.Authorization
    }
  },
  [AUTH.LOGIN_FAILURE]: (state, action) => {
    return {
      ...state,
      isLogin: false,
      userId: null,
      Authorization: null
    }
  },
  [AUTH.LOGOUT]: (state, action) => {
    return {
      ...state,
      isLogin: false,
      userId: null,
      Authorization: null
    }
  },

  [AUTH.ID_CHECK] : (state, action) => {
    return {
      ...state,
      userId: action.payload.userId,
      duplicatedCheck: null
    }
  },
	[AUTH.ID_CHECK_SUCCESS] : (state, action) => {
    return {
      ...state,
      userId: action.payload.userId,
      duplicatedCheck: action.payload.ok
    }
  },
  [AUTH.ID_CHECK_FAILURE] : (state, action) => {
    return {
      ...state,
      userId: action.payload.userId,
      duplicatedCheck: false
    }
  },

	// [AUTH.REGISTER] : (state, action) => state,
	// [AUTH.REGISTER_SUCCESS] : (state, action) => state,
	// [AUTH.REGISTER_FAILURE] : (state, action) => state,

}, initialState);

// export default combineReducers({ 
// 	login
// });