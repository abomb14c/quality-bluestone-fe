import { combineReducers } from 'redux';
import userReducer from './userReducer/userReducer';
import AdminReducer from './adminReducer/AdminReducer';

const rootReducer = combineReducers({
  user: userReducer,
  active: AdminReducer
})

export default rootReducer;