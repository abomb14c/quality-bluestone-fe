import { combineReducers } from 'redux';
import userReducer from './userReducer/userReducer';
import AdminReducer from './adminReducer/AdminReducer';
// import FolderReducer from './folderReducer/folderReducer';
import folderReducer from './folderReducer/folderReducer';

const rootReducer = combineReducers({
  user: userReducer,
  active: AdminReducer,
  folder: folderReducer
})

export default rootReducer;