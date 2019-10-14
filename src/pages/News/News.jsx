import React, { useState, useEffect } from 'react';
import {
  Grid, Menu, Card, Image, Transition,
} from 'semantic-ui-react';

const News = (props) => {
  const { user, imageUrl, description } = props.data;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <Grid.Row style={{ backgroundColor: 'rgb(50,54,57)' }}>
      <Grid.Column>
        <Menu>
          <Menu.Item as={Card}>
            <Image src={imageUrl} />
            <Card.Content>
              <Card.Header>{user}</Card.Header>
              <Card.Description>{description}</Card.Description>
            </Card.Content>
          </Menu.Item>
          <Transition animation="scale" duration={1000} visible={visible}>
            <span style={{ padding: '1rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
              vero eligendi quas nihil magni alias ad ipsum quisquam facere
              tenetur, maxime aliquid, a error doloremque repellendus? Minus nam
              blanditiis in.
            </span>
          </Transition>
        </Menu>
      </Grid.Column>
    </Grid.Row>
  );
};

export default News;
