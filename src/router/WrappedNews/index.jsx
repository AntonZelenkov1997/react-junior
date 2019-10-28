import React from 'react';
import { Grid } from 'semantic-ui-react';
import News from '../../pages/News/index';
import data from '../../data/data';

const WrappedNews = () => (
  <Grid>
    <Grid.Row style={{ backgroundColor: 'rgb(112,121,129)' }}>
      <Grid.Column>
        {data.map((value) => (
          <News key={value.id} data={value} />
        ))}
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default WrappedNews;
