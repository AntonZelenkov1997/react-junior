import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Segment, Grid } from 'semantic-ui-react';
import GridHeader from '../pages/Header/index';
import News from '../pages/News/News';
import data from '../data/data';

const App = () => (
  <Router>
    <Container style={{ marginTop: '2rem' }}>
      <GridHeader />
      <Segment>
        <Grid>
          <Switch>
            <Route exact path="/" />
            <Route path="/login">login</Route>
            <Route path="/news">
              {data.map((value) => <News key={value.id} data={value} />)}
            </Route>
            <Route path="/profile">profile</Route>
          </Switch>
        </Grid>
      </Segment>
    </Container>
  </Router>
);

export default App;
