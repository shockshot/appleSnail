import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux';
//추후 auth.js 이름 변경 필요
import {AUTH} from '../actions/AuthActions';
import auth from '../reducers/auth';
import sales from '../reducers/sales';
// import loading from '../reducers/loading';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { handleActions } from 'redux-actions';

/* 로그 미들웨어를 생성 할 때 설정 커스터마이징 가능
   https://github.com/evgenyrodionov/redux-logger#options
*/
//로거
const logger = createLogger();
//dummy reducer
const loadingReducer = handleActions({}, {});

//local-storage에 save
const saver = store => next => action => {
  let result = next(action);
  localStorage['redux-store'] = JSON.stringify(store.getState());
  return result;
}

// const loadingPresenter = store => next => action => {
//   if(/_REQUEST$/.test(action.type)) {
//     console.log('loading on...', store)
//   }
//   if(/(_SUCCESS|_FAILURE)$/.test(action.type)) {
//     console.log('loading off...', store)
//   }
//   return next(action);
// }

const initialStoreState = {
  loading: false,
  auth: {isLogin: false}
}

const rootReducers = (state, action) => {
  if (action.type === AUTH.LOGOUT) {
    state = initialStoreState
  }

  //action을 hook 해서 request 가 붙은 경우 loading 을 on, succ 혹은 fail 이 붙은 경우 off 한다.
  if(/_REQUEST$/.test(action.type)) {
    state.loading = true;
  }
  if(/(_SUCCESS|_FAILURE)$/.test(action.type)) {
    state.loading = false;
  }

  return combineReducers({
    auth,
    sales,
    loading: loadingReducer
  })(state, action);
}


//storeFactory
const storeFactory = (initialState = initialStoreState) => 
  applyMiddleware(
    logger, 
    // loadingPresenter,
    ReduxThunk, 
    saver
  )(createStore)(
    rootReducers,
    (localStorage['redux-store'])? JSON.parse(localStorage['redux-store']) : initialState
  )

const store = storeFactory(initialStoreState);

export default store;