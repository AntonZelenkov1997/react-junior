import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import responseReducer from './responseServer/reducer';
import userInfoReducer from './userInfo/reducer';


export default combineReducers({
  authMap: authReducer,
  responseMap: responseReducer,
  userInfoMap: userInfoReducer,
});
