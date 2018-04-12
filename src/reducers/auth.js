import { AUTH } from '../actions/ActionTypes';

export const login = (state = {}, action) => {
  switch(action.type) {
    case AUTH.LOGIN:
      return {
        isLogin: true,
        userId: action.userId,
        password: action.password
      }
    case AUTH.LOGOUT:
      return {
        isLogin: false
      }
    default:
      return state
  }
}