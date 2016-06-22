'use strict';

const jwt = require('jwt-simple');
const redisClient = require('./redis_connection');
const secret = require('./config.js').APP_SECRET;

module.exports = {

  createToken: (user) => {
    return jwt.encode({
      iss: user.id,
    }, secret);
  },

  startSession: (user, token) => {
    let username = user.username;
    redisClient.set(username, token);
    redisClient.expire(username, 60*60*24); // Expires in one day
  },

  destroySession: (username) => {
    redisClient.del(username);
  },

  // TOKEN VERIFICATION MIDDLEWARE
  isAuthenticated: (req, res, next) => {
    let username = req.query.username || req.body.username;
    let token = req.query.token || req.body.token;

    redisClient.get(username, (err, reply) => {
      if ( err ) {
        console.log('ERROR: An error occurred while fetching redis value: ', err);
      } else if ( reply ) {
        if ( token === reply ) {
          console.log('User ', username, ' is authenticated');
          return next();
        } else {
          console.error('ERROR: Invalid auth token.');
        }
      }
      res.json({success: false}); 
    });
  },
};




