import React, { useEffect, useState, useRef } from 'react';
import {
  Header,
  Transition,
  Visibility,
  Ref,
  Image,
  Segment,
  Grid,
} from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { mapStateToProps, mapDispatchToProps } from '../../store/maps';
import store from '../../store/store';
import Contacts from '../../components/Contacts';
import { errorUser } from '../../backend/index';

// Попробуй потом решить как нибудь мгновенную анимацию Header
const Profile = ({ actionGetUserInfo, userInfo }) => {
  const [visibleHeader, setVisibleHeader] = useState(false);
  const [visibleProfile, setVisibleProfile] = useState(false);
  const [calculations, setCalculations] = useState({
    topPassed: false,
    pixelsPassed: 0,
  });
  const contextRef = useRef();
  const { id } = useParams();

  const handleUpdate = (e, { calculations }) => {
    setCalculations(calculations);
  };

  useEffect(() => {
    setVisibleHeader(true);
    axios
      .get(`https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${id}`)
      .then((res) => {
        if (JSON.stringify(res.data) === JSON.stringify(errorUser)) {
          return alert('Ошибка в индексе ссылки пользователя');
        }
        return actionGetUserInfo(res.data.data);
      });
    document.body.style.backgroundColor = 'rgb(27,28,29)';
    document.body.style.height = '90em';
    if (calculations.topPassed) {
      setVisibleProfile(true);
    }
    return () => {
      document.body.style.backgroundColor = 'rgb(247,247,247)';
      document.body.style.height = '100%';
    };
  }, [id, actionGetUserInfo, userInfo, setVisibleHeader]);

  if (userInfo === null) {
    return <div>Loading...</div>;
  }
  return (
    <Ref innerRef={contextRef}>
      <div>
        <Transition scale="scale" duration={1000} visible={visibleHeader}>
          <Visibility offset={[10, 10]} onUpdate={handleUpdate}>
            <Header
              content={`Добро пожаловать :) #${id}`}
              textAlign="center"
              className="PageProfile"
            />
          </Visibility>
        </Transition>

        <Transition
          animation="fly right"
          duration={800}
          visible={visibleProfile}
        >
          <div>
            <Header
              content="Взгляните на ваше досье"
              // content={`topPassed: ${calculations.topPassed.toString()} pixelsPassed: ${calculations.pixelsPassed.toString()}`}
              textAlign="center"
              className="PageProfile ForSegmentHeader"
            />
            <Segment className="ProfileSegment">
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <Header as="h2" dividing>{`#${id}`}</Header>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={6}>
                    <Image
                      wrapped
                      src="https://img.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg"
                      size="medium"
                      rounded
                    />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Header block className="ProfileHeader">
                      {`Город: ${userInfo.city}`}
                      <hr />
                      <br />
                      Языки:
                      {userInfo.languages.map((value) => ` ${value} `)}
                      <hr />
                      <br />
                    </Header>
                    <Header block className="ProfileHeader">
                      Контакты:
                      <Contacts data={userInfo} />
                    </Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </div>
        </Transition>
      </div>
    </Ref>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
