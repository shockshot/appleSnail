import { combineReducers } from 'redux';
import { AUTH } from '../actions/ActionTypes';


//reducer

const login = (state = {isLogin: false}, action) => {
  switch(action.type) {
    case AUTH.LOGIN:
      return {
//         isLogin: true, //로그인 성공하기 전에는 상태를 true로 바꿀수가 없음..
				isLogin: false,
        userId: action.userId,
        password: action.password
      }
    case AUTH.LOGOUT:
      return {
        isLogin: false,
				userId: null,
				password: null1
      }
		//로그인 실패, 성공에 따른 reducer 정의 필요...
    default:
      return state
  }
}

export default combineReducers({ 
	login
});