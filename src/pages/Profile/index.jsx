import React, { useEffect, useState } from 'react';
import { Header, Transition } from 'semantic-ui-react';
import { logHistory } from '../../history/history';

const Profile = () => {
  const [visibleHeader, setVisibleHeader] = useState(false, []);

  useEffect(() => {
    setVisibleHeader(true);
    document.body.style.backgroundColor = 'rgb(27,28,29)';
    return () => {
      document.body.style.backgroundColor = 'rgb(247,247,247)';
    };
  }, []);

  return (
    <Transition scale="scale" duration={3000} visible={visibleHeader}>
      <Header
        content="Добро пожаловать :)"
        textAlign="center"
        className="PageProfile"
      />
    </Transition>
  );
};


export default Profile;
