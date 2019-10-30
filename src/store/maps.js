import { actionAuthTrue, actionAuthFalse } from './auth/actions';
import actionGetId from './responseServer/actions';
import actionGetUserInfo from './userInfo/actions';
import actionGetNews from './newsProfile/actions';

const mapStateToProps = (state) => ({
  authStatus: state.authMap.authStatus,
  userId: state.responseMap.userId,
  userInfo: state.userInfoMap.userInfo,
  newsData: state.newsMap.newsData,
});

const mapDispatchToProps = {
  actionAuthTrue,
  actionAuthFalse,
  actionGetId,
  actionGetUserInfo,
  actionGetNews,
};

export { mapStateToProps, mapDispatchToProps };
