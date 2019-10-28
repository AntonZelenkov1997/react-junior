import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Login from '../../pages/Login/index';

const WrappedLogin = () => (
  <Grid>
    <Grid.Row centered>
      <Grid.Column width={5} as={Segment}>
        <Login />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default WrappedLogin;
