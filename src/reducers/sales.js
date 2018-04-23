// import { combineReducers } from 'redux';
import { SALES } from '../actions/SalesActions';
import { handleActions } from 'redux-actions';

const initialState = {isLogin: false};

export default handleActions({
  [SALES.SEARCH]: (state, action) => {},
  [SALES.REGISTER]: (state, action) => {},
  [SALES.POST]: (state, action) => {},
  [SALES.PUT]: (state, action) => {},
  [SALES.DELETE]: (state, action) => {},
  [SALES.GET]: (state, action) => {},
}, initialState);

// export default combineReducers({ 
// 	login
// });