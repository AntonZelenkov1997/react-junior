import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isActive, setIsActive] = useState({ name: '' });

  const handleClick = (e, { name }) => setIsActive({ name });

  return (
    <Menu borderless widths={3}>
      <Menu.Item as={Link} to="/" name="MainPage" onClick={handleClick} active={isActive.name === 'MainPage'}>
        Главная страница
      </Menu.Item>

      <Menu.Item as={Link} to="/news" name="News" onClick={handleClick} active={isActive.name === 'News'}>
        Новости
      </Menu.Item>

      <Menu.Item as={Link} to="/profile" name="Profile" onClick={handleClick} active={isActive.name === 'Profile'}>
        Профиль
      </Menu.Item>
    </Menu>
  );
};

export default Header;
