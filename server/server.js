const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '5mb'}));

app.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const sequelize = require('./config/mysql_connection');
sequelize.authenticate().then( (err) => {
    console.log('SUCCESS: Connection to the database has been established.');
  }).catch( (err) => {
    console.log('ERROR: Unable to connect to the database:', err);
  });

require('./config/router')(app,express);

app.listen(3000, () => {
  console.log('Bookface API server listening on port 3000.');
});




