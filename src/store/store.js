import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux';
//추후 auth.js 이름 변경 필요
import auth from '../reducers/auth.js'


const logger = store => next => action => {
  let result;
  console.groupCollapsed("dispatching", action.type);
  console.log('before status', store.getState());
  console.log('action', action);
  result = next(action);
  console.log('next status', store.getState());
  console.groupEnd();
}

const saver = store => next => action => {
  let result = next(action);
  localStorage['redux-store'] = JSON.stringify(store.getState());
  return result;
}

const storeFactory = (initialState = {}) => 
  applyMiddleware(logger, saver)(createStore)(
    combineReducers({auth}),
    (localStorage['redux-store'])?
      JSON.parse(localStorage['redux-store']) : initialState
  )


export default storeFactory;