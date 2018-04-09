import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import '../imports/startup/simple-schema-configuration.js';
import configureServices from './modules/configure-service';

Meteor.startup(() => {
  configureServices();
});

Accounts.onCreateUser(function(options, user) {
  if (typeof user.services.google != 'undefined') {
    user.email = user.services.google.email;
    user.profilePicture = user.services.google.picture;
    user.username = user.services.google.name;
  } else if (typeof user.services.facebook != 'undefined') {
    user.email = user.services.google.email;
    user.profilePicture = user.services.google.picture;
    user.username = user.services.google.name;
  }
  return user;
});
