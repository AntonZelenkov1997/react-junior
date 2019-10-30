import React from 'react';
import { Icon } from 'semantic-ui-react';

const Contacts = ({ data }) => {
  const tempData = data;
  tempData.social.forEach((elem, index) => {
    elem.key = index.toString();
    if (elem.label === 'web') {
      elem.label = 'globe';
    }
    if (elem.label === 'youtube') {
      elem.color = 'red';
    }
    if (elem.label === 'twitch') {
      elem.color = 'purple';
    }
  });
  return tempData.social.map((value) => (
    <a href={value.link} key={value.key}>
      <Icon key={`${value.key}Icon`} link name={value.label} size="big" color={value.color} />
    </a>
  ));
};

export default Contacts;
