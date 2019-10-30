import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import News from '../../pages/News/index';
import { mapStateToProps, mapDispatchToProps } from '../../store/maps';

const WrappedNews = ({ actionGetNews, newsData }) => {
  useEffect(() => {
    axios
      .get('https://mysterious-reef-29460.herokuapp.com/api/v1/news')
      .then((res) => {
        actionGetNews(res);
      });
  });

  if (newsData === null) {
    return <div>Loading...</div>;
  }
  return (
    <Grid>
      <Grid.Row style={{ backgroundColor: 'rgb(112,121,129)' }}>
        <Grid.Column>
          {newsData.data.data.map((value) => (
            <News key={value.id} news={value} />
          ))}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNews);
