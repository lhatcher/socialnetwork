'use strict';
const express = require('express');
const app = express();
const sequelize = require('./mysql_connection');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const Post = require('../models/post');
const Friend = require('../models/friend');
const utils = require('./utils');

module.exports = {

  // GET HANDLERS
  getPosts: (req, res) => {
    Post.findAll().then( (data) => {
      res.json(data.reverse());
    });  
  },

  getFriends: (req, res) => {
    let username = req.query.username;
    User.find({where: {username: username} })
      .then( (user) => {
        if ( user ) {
          Friend.findAll({where: {userId: user.dataValues.id} })
            .then( (friends) => {
              if ( friends ) {
                res.json(friends);
              }
            });
        }
    });
  },
  

  // POST HANDLERS
  createUser: (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;

    User.sync({force: false}).then(() => {
      User.find({ where: {username: username} })
        .then( (user) => {
          if ( user ) {
            console.log('ERROR: That username is already in the database.');
            res.json({
              success: false,
              message: 'That user name is already in the database.',
            });
          } else {
            bcrypt.genSalt(10, (err, salt) => {
              if ( salt ) {
                bcrypt.hash(password, salt, (err, hash) => {
                  if (err) console.error(err);
                  if ( hash ) {
                    User.sync().then( () => {
                      return User.create({
                        username: username,
                        password: hash,
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                      }).then((newUser) => {
                        let token = utils.createToken(newUser);
                        utils.startSession(newUser, token);
                        res.json({
                          success: true,
                          userId: newUser.id,
                          username: newUser.username,
                          firstName: newUser.firstName,
                          lastName: newUser.lastName,
                          authToken: token,
                        });
                      });
                    });
                  } else {
                    console.log('ERROR: A problem occurred while hashing password.', err);
                  }
                });
              } else {
                console.log('ERROR: A problem occurred generating salt.');
              }
            });
          }
        });
    });
  },

  login: (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    User.find({ where: {username: username} })
      .then( (user) => {
        if ( user ) {
          bcrypt.compare(password, user.password, (err, success) => {
            if ( success ) {
              let token = utils.createToken(user);
              utils.startSession(user, token);

              res.json({
                success: true,
                userId: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                authToken: token,
              });
            } else {
              console.log('ERROR: The password was incorrect. ');
              res.sendStatus(401);
            }
          });
        } else {
          console.log("ERROR: That username does not exist. ");
          res.send('<h3> ERROR: That username does not exist. </h3>');
        }
      });
  },

  logout: (req, res) => {
    let username = req.body.username;
    utils.destroySession(username);
    res.json({success: true});
  },

  createPost: (req, res) => {
    let username = req.body.username;
    let content = req.body.content;

    User.find({where: {username: username}}).then( (user) => {
      if ( !user ) {
        res.json({
          error: 'An error occurred. Try logging in again. ',
        });
      } else {      
        return Post.create({
          author: username,
          content: content,
          userId: user.id,
        }).then((post) => {
          res.json(post.dataValues);
        });
      }
    });
  },

  addFriend: (req, res) => {
    let username = req.body.username;
    let addedFriend = req.body.friend;

    User.find({where: {username: username}})
      .then((user) => {
        if ( !user ) {
          res.json({
            error: 'An error occurred. Try logging in again. ',
          });
        } else {
          User.find({where: {username: addedFriend}})
            .then((friend) => {
              Friend.sync().then(() => {
                return Friend.create({
                  userId: friend.dataValues.id,
                  friend: user.dataValues.username,
                }).then(() => {
                  return Friend.create({
                    userId: user.dataValues.id,
                    friend: friend.dataValues.username,
                  });
                });
              }).then(() => { 
                  res.json({
                    id: friend.dataValues.id,
                    friend: addedFriend,
                    createdAt: friend.dataValues.createdAt,
                    updatedAt: friend.dataValues.updatedAt,
                    userId: friend.dataValues.userId,
                  });
                });
            });
        }
      });
  },
};






