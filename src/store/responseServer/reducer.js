import ACTION_GET_RESPONSE_SERVER from './actionTypes';

const initialState = {
  userId: null,
};

const responseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_GET_RESPONSE_SERVER:
      return { ...state, userId: action.payload };
    default:
      return state;
  }
};

export default responseReducer;
