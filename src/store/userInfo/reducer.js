import ACTION_GET_USER_INFO from './actionTypes';

const initialState = {
  userInfo: null,
};

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_GET_USER_INFO:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};

export default userInfoReducer;
