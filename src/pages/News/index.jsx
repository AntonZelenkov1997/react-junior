import React, { useState, useEffect } from 'react';
import {
  Menu, Card, Image, Transition, Popup, Rating,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { logHistory } from '../../history/history';

const News = (props) => {
  const { user, imageUrl, description } = props.data;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <Menu>
      <Popup
        trigger={(
          <Menu.Item as={Card}>
            <Image src={imageUrl} />
            <Card.Content>
              <Card.Header>{user}</Card.Header>
              <Card.Description>{description}</Card.Description>
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
        <span style={{ padding: '1rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, vero
          eligendi quas nihil magni alias ad ipsum quisquam facere tenetur,
          maxime aliquid, a error doloremque repellendus? Minus nam blanditiis
          in.
        </span>
      </Transition>
    </Menu>
  );
};

News.propTypes = {
  data: PropTypes.shape({
    user: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default News;
