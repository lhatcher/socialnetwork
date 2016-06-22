'use strict';

const handlers = require('./requestHandlers');
const utils = require('./utils');

module.exports = (app, express) => {
  // GET REQUESTS
  app.get('/api/feed', utils.isAuthenticated, handlers.getPosts);
  app.get('/api/myfriends', utils.isAuthenticated, handlers.getFriends);

  // POST REQUESTS
  app.post('/api/signup', handlers.createUser);
  app.post('/api/login', handlers.login);
  app.post('/api/logout', handlers.logout);
  app.post('/api/posts', utils.isAuthenticated, handlers.createPost);
  app.post('/api/friends', handlers.addFriend)
};