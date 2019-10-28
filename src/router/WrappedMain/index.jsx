import React from 'react';
import { Grid } from 'semantic-ui-react';
import Main from '../../pages/Main/index';

const WrappedMain = () => (
  <Grid centered>
    <Grid.Row>
      <Grid.Column width={5}>
        <Main />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default WrappedMain;
