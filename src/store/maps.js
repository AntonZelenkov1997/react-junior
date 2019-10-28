import { actionAuthTrue, actionAuthFalse } from './auth/actions';
import actionGetId from './responseServer/actions';

const mapStateToProps = (state) => ({
  authStatus: state.auth.authStatus,
  userId: state.response.userId,
});

const mapDispatchToProps = {
  actionAuthTrue,
  actionAuthFalse,
  actionGetId,
};

export { mapStateToProps, mapDispatchToProps };
