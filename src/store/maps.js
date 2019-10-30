import { actionAuthTrue, actionAuthFalse } from './auth/actions';
import actionGetId from './responseServer/actions';
import actionGetUserInfo from './userInfo/actions';

const mapStateToProps = (state) => ({
  authStatus: state.authMap.authStatus,
  userId: state.responseMap.userId,
  userInfo: state.userInfoMap.userInfo,
});

const mapDispatchToProps = {
  actionAuthTrue,
  actionAuthFalse,
  actionGetId,
  actionGetUserInfo,
};

export { mapStateToProps, mapDispatchToProps };
