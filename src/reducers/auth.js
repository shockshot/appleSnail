// import { combineReducers } from 'redux';
import { AUTH } from '../actions/ActionTypes';


//reducer

const auth = (state = {isLogin: false}, action) => {
  switch(action.type) {
    case AUTH.LOGIN:
      return {
//         isLogin: true, //로그인 성공하기 전에는 상태를 true로 바꿀수가 없음..
				isLogin: false,
        userId: action.userId
      }
    case AUTH.LOGOUT:
      return {
        isLogin: false,
				userId: null
      }
    case AUTH.LOGIN_SUCCESS:
      return {
        isLogin: true,
        userId: action.userId,
        Authorization: action.Authorization
      }
    case AUTH.LOGIN_FAILURE:
      return {
        isLogin: false,
        userId: null,
        Authorization: null
      }
    default:
      return state
  }
}

export default auth;

// export default combineReducers({ 
// 	login
// });