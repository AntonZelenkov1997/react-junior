import { ACTION_STATUS_AUTH_TRUE, ACTION_STATUS_AUTH_FALSE } from './actionsTypes';

const actionAuthTrue = () => (
  {
    type: ACTION_STATUS_AUTH_TRUE,
    payload: true,
  }
);

const actionAuthFalse = () => (
  {
    type: ACTION_STATUS_AUTH_FALSE,
    payload: false,
  }
);

export { actionAuthTrue, actionAuthFalse };
