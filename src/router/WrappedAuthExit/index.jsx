import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import AuthExit from '../../pages/AuthExit/index';

const WrappedAuthExit = () => (
  <Grid>
    <Grid.Row centered>
      <Grid.Column width={5} as={Segment} textAlign="center">
        <AuthExit />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default WrappedAuthExit;
