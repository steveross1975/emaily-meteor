import React from 'react';

import PrivateHeader from './PrivateHeader';

export default () => {
  const loggedUser = () => {
    const currentUser = Meteor.users.findOne(Meteor.userId())
      ? Meteor.users.findOne(Meteor.userId())
      : '';
    return currentUser.username;
  };
  return (
    <div>
      <PrivateHeader title="Dashboard" />
      <div className="wrapper">App Dashboard - Logged user: {loggedUser()}</div>
    </div>
  );
};
