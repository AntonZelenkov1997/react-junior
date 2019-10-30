import React, { useEffect, useState } from 'react';
import {
  Form, Input, Header, Button, Transition, Segment,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { mapStateToProps, mapDispatchToProps } from '../../store/maps';
import { logHistory, historyPush } from '../../history/history';
import { errorLogin } from '../../backend/index';
import store from '../../store/store';

const Login = ({ actionAuthTrue, actionGetId }) => {
  const [animation, setAnimation] = useState(false);
  const [animationError, setAnimationError] = useState(false);
  const [loadStatus, setLoadStatus] = useState(false);
  const history = useHistory();

  const onSubmit = () => {
    setLoadStatus(true);
    const emailForm = document.querySelector('.UsernameForm input').value;
    const passwordForm = String(document.querySelector('.PasswordForm input').value);
    const user = {
      email: emailForm,
      password: passwordForm,
    };

    axios
      .post('https://mysterious-reef-29460.herokuapp.com/api/v1/validate', user)
      .then((res) => {
        if (JSON.stringify(res.data) === JSON.stringify(errorLogin)) {
          document.querySelector('.PasswordForm input').value = null;
          setLoadStatus(false);
          setAnimationError(true);
        } else {
          actionGetId(res.data.data.id);
          actionAuthTrue();
          logHistory[logHistory.length - 2] === '/profile'
            ? history.push(`/profile/${store.getState().responseMap.userId}`)
            : history.goBack();
        }
      });
  };

  useEffect(() => {
    setAnimation(true);
    historyPush('/login');
  }, []);

  return (
    <Transition visible={animation} animation="scale" duration={1000}>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <Header as="h2" content="Авторизация" textAlign="center" />
        </Form.Field>

        <Form.Field>
          <label> Login </label>
          <Input
            type="email"
            icon="user circle"
            iconPosition="left"
            placeholder="Login"
            className="UsernameForm"
          />
        </Form.Field>

        <Form.Field>
          <label> Password </label>
          <Input
            type="password"
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            className="PasswordForm"
          />
        </Form.Field>

        <Form.Field>
          <Transition visible={animationError} animation="scale" duration={500}>
            <Segment
              textAlign="center"
              className="ErrorSegment"
              tertiary
              content="Имя пользователя или пароль введены не верно!"
            />
          </Transition>
        </Form.Field>

        <Form.Field>
          <Button
            type="submit"
            color="green"
            content="Login"
            fluid
            loading={loadStatus}
          />
        </Form.Field>
      </Form>
    </Transition>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
