import ACTION_GET_NEWS from './actionsTypes';

const initialState = {
  newsData: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_GET_NEWS:
      return { ...state, newsData: action.payload };
    default:
      return state;
  }
};

export default newsReducer;
