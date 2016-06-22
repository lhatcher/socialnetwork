const redis = require('redis');
const redisClient = redis.createClient();

redisClient.on('connect', () => console.log('REDIS connection established.') );

module.exports = redisClient;