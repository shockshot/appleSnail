import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux';
//추후 auth.js 이름 변경 필요
import auth from '../reducers/auth';
import sales from '../reducers/sales';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';
// import penderMiddleware from 'redux-pender';
// import {penderReducer} from 'redux-pender'

/* 로그 미들웨어를 생성 할 때 설정 커스터마이징 가능
   https://github.com/evgenyrodionov/redux-logger#options
*/
//로거
const logger = createLogger();

//local-storage에 save
const saver = store => next => action => {
  let result = next(action);
  localStorage['redux-store'] = JSON.stringify(store.getState());
  return result;
}


//storeFactory
const storeFactory = (initialState = {}) => 
  applyMiddleware(
    logger, 
    ReduxThunk, 
    // penderMiddleware(), 
    saver)
    (createStore)(
    combineReducers({
      auth,
      sales
      // pender: penderReducer
    }),
    (localStorage['redux-store'])? JSON.parse(localStorage['redux-store']) : initialState
  )

const store = storeFactory()

export default store;