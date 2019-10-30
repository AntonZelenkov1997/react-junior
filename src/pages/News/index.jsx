import React, { useState, useEffect } from 'react';
import {
  Menu, Card, Transition, Popup, Rating,
} from 'semantic-ui-react';

const News = ({ news }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <Menu>
      <Popup
        trigger={(
          <Menu.Item as={Card}>
            <Card.Content>
              <Card.Header>{news.id}</Card.Header>
              <Card.Description>{news.title}</Card.Description>
            </Card.Content>
          </Menu.Item>
        )}
      >
        <Popup.Header>Рейтинг</Popup.Header>
        <Popup.Content>
          <Rating icon="star" defaultRating={5} maxRating={5} />
        </Popup.Content>
      </Popup>
      <Transition animation="scale" duration={1000} visible={visible}>
        <span style={{ padding: '1rem' }}>{news.text}</span>
      </Transition>
    </Menu>
  );
};

export default News;
