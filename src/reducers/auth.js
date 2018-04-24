// import { combineReducers } from 'redux';
import { AUTH } from '../actions/AuthActions';
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
  }
}, initialState);

// export default combineReducers({ 
// 	login
// });