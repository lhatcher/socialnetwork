const Sequelize = require('sequelize');

const sequelize = require('../config/mysql_connection');

const Friend = sequelize.define('friends', {

  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'userId',
  },

  friend: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'friend',
  },
}, { freezeTableName: true });

Friend.sync();

module.exports = Friend;