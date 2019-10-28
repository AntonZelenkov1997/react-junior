import ACTION_GET_RESPONSE_SERVER from './actionTypes';

const actionGetId = (value) => ({
  type: ACTION_GET_RESPONSE_SERVER,
  payload: value,
});

export default actionGetId;
