import ACTION_GET_USER_INFO from './actionTypes';

const actionGetUserInfo = (data) => ({
  type: ACTION_GET_USER_INFO,
  payload: data,
});

export default actionGetUserInfo;
