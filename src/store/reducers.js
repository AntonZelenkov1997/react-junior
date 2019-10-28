import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import responseReducer from './responseServer/reducer';

export default combineReducers({
  auth: authReducer,
  response: responseReducer,
});
