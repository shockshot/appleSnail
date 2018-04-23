// import { combineReducers } from 'redux';
import { AUTH } from '../actions/AuthActions';
import { handleActions } from 'redux-actions';

const initialState = {isLogin: false};

export default handleActions({
  [AUTH.LOGIN]: (state, action) => {
    return {
      isLogin: false,
      userId: action.userId
    }
  },
  [AUTH.LOGIN_SUCCESS]: (state, action) => {
    return {
      isLogin: true,
      userId: action.userId,
      Authorization: action.Authorization
    }
  },
  [AUTH.LOGIN_FAILURE]: (state, action) => {
    return {
      isLogin: false,
      userId: null,
      Authorization: null
    }
  },
  [AUTH.LOGOUT]: (state, action) => {
    return {
      isLogin: false,
      userId: null
    }
  }
}, initialState);

// export default combineReducers({ 
// 	login
// });