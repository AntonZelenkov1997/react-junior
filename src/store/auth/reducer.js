import { ACTION_STATUS_AUTH_TRUE, ACTION_STATUS_AUTH_FALSE } from './actionsTypes';

const initialState = {
  authStatus: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_STATUS_AUTH_TRUE:
      return { ...state, authStatus: action.payload };
    case ACTION_STATUS_AUTH_FALSE:
      return { ...state, authStatus: action.payload };
    default:
      return state;
  }
};

export default authReducer;
