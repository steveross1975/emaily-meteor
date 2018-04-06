import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import '../imports/startup/simple-schema-configuration.js';
import configureServices from './modules/configure-service';

Meteor.startup(() => {
  configureServices();
});
