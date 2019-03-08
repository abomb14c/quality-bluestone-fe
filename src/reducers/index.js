import { combineReducers } from 'redux';
import userReducer from './userReducer/userReducer';
import AdminReducer from './adminReducer/AdminReducer';

const rootReducer = combineReducers({
  user: userReducer,
  employee: AdminReducer
})

export default rootReducer;