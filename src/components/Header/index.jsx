import React, { useState } from 'react';
import { Menu, Grid, Dropdown } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../store/maps';

const Header = ({ authStatus, actionAuthFalse }) => {
  const [isActive, setIsActive] = useState({ name: '' });
  const history = useHistory();

  const inAuthClick = () => {
    history.push('/login');
  };

  const inAuth = [
    {
      key: 1, text: 'Войти', value: 1, description: 'Sign in', icon: 'home', onClick: inAuthClick,
    },
  ];

  const exitAuth = [
    {
      key: 2, text: 'Выйти', value: 2, description: 'Logout', icon: 'home', onClick: actionAuthFalse,
    },
  ];

  const handleClick = (e, { name }) => setIsActive({ name });

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column className="HeaderColumn">
          <Menu borderless widths={4}>
            <Menu.Item
              as={Link}
              to="/"
              name="MainPage"
              onClick={handleClick}
              active={isActive.name === 'MainPage'}
            >
              Главная страница
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/news"
              name="News"
              onClick={handleClick}
              active={isActive.name === 'News'}
            >
              Новости
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/profile"
              name="profile"
              onClick={handleClick}
              active={isActive.name === 'profile'}
            >
              Профиль
            </Menu.Item>

            <Dropdown
              text="Авторизация"
              options={authStatus ? exitAuth : inAuth}
              simple
              item
            />
          </Menu>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
