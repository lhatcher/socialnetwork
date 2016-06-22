const Sequelize = require('sequelize');

const sequelize = require('../config/mysql_connection');

const User = sequelize.define('users', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    field: 'username',
  },

  password: {
    type: Sequelize.STRING,
    field: 'password',
  },

  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' 
  },

  lastName: {
    type: Sequelize.STRING,
    field: 'last_name',
  },

  email: {
    type: Sequelize.STRING,
    field: 'email',
  },

}, { freezeTableName: true });

module.exports = User;