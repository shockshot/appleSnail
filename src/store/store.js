import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux';
//추후 auth.js 이름 변경 필요
import auth from '../reducers/auth.js'
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';

/*
// middlewares
const logger = store => next => action => {
  let result;
  console.groupCollapsed("dispatching", action.type);
  console.log('before status', store.getState());
  console.log('action', action);
  result = next(action);
  console.log('next status', store.getState());
  console.groupEnd();
  return result;
}*/

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
  applyMiddleware(logger, ReduxThunk, saver)(createStore)(
    combineReducers({auth}),
    (localStorage['redux-store'])?
      JSON.parse(localStorage['redux-store']) : initialState
  )


export default storeFactory;