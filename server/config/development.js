'use strict';

console.log("Running in Development mode");


 // Here username, password, etc are hard-coded for development env
 // *However* they are read from ENV variables for production.
 //
 // -> See config/production.js                                       


module.exports = {
  HOSTNAME: "localhost",
  PORT: 3000,

  DATABASE_NAME: 'quipdb',
  MYSQL_USERNAME: 'root',       
  MYSQL_PASSWORD: 'root',       
  MYSQL_HOSTNAME: 'localhost',  
  MYSQL_PORT: 3306,
  MYSQL_LOGGING: console.log,

  version: '1.0.0'
};
