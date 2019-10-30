import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Header from '../components/Header/index';
import WrappedNews from './WrappedNews/index';
import WrappedLogin from './WrappedLogin/index';
import WrappedProfile from './WrappedProfile/index';
import WrappedMain from './WrappedMain/index';
import { mapStateToProps, mapDispatchToProps } from '../store/maps';
import { historyPush } from '../history/history';

const App = ({ authStatus, actionAuthTrue, actionAuthFalse }) => (
  <Container style={{ marginTop: '2rem' }}>
    <input
      style={{ marginBottom: '10px', display: 'none' }}
      type="button"
      value="Сменить статус"
      onClick={() => {
        authStatus ? actionAuthFalse() : actionAuthTrue();
      }}
    />
    <Router>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            historyPush('/');
            return <WrappedMain />;
          }}
        />
        <Route
          path="/login"
          render={() => (authStatus ? null : <WrappedLogin />)}
        />
        <Route
          path="/news"
          render={() => {
            historyPush('/news');
            return <WrappedNews />;
          }}
        />
        <Route
          path="/profile/:id"
          render={() => {
            historyPush('/profile');
            return authStatus ? (
              <WrappedProfile />
            ) : (
              <Redirect push to="/login" from="/profile/:id" />
            );
          }}
        />
      </Switch>
    </Router>
  </Container>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
