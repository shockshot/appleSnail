// import { combineReducers } from 'redux';
import { AUTH } from 'actions/AuthActions';
import { handleActions } from 'redux-actions';

const initialState = {isLogin: false, status: null};

export default handleActions({
  [AUTH.LOGIN]: (state, {payload}) => {
    return {
      ...state,
      isLogin: null,
      userId: payload.userId,
      Authorization: null,
      status: 0
    }
  },
  [AUTH.LOGIN_SUCCESS]: (state, {payload}) => {
    return {
      ...state,
      isLogin: true,
      ...payload,
      status: 1
    }
  },
  [AUTH.LOGIN_FAILURE]: (state, action) => {
    return {
      ...state,
      isLogin: false,
      Authorization: null,
      status: -1
    }
  },
  [AUTH.LOGOUT]: (state, action) => {
    return initialState
  },

}, initialState);

// export default combineReducers({ 
// 	login
// });