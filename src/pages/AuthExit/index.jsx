import React from 'react';
import { Header, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../store/maps';

const AuthExit = ({ actionAuthFalse }) => (
  <>
    <Header
      as="h2"
      content="Вы хотите выйти?"
      textAlign="center"
    />
    <Button
      color="red"
      content="Выйти"
      onClick={actionAuthFalse}
    />
  </>
);

export default connect(mapStateToProps, mapDispatchToProps)(AuthExit);
