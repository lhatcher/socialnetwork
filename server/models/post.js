const Sequelize = require('sequelize');

const sequelize = require('../config/mysql_connection');

const User = require('./user');

const Post = sequelize.define('posts', {

  author: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'author',
  },

  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    field: 'content',
  },
}, { freezeTableName: true });

Post.belongsTo(User);
sequelize.sync();

module.exports = Post;