const express = require('express');
const authRoutes = require('./auth');
const userRoutes = require('./users');

/*
All routes will be here
*/
let router = (app) => {  
  let router = express.Router();

  authRoutes(router);
  app.use('/', router);

  userRoutes(router);
  app.use('/user', router);

}

module.exports = router;
