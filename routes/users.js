const express = require("express");
const Promise = require("bluebird");
const ensureAuthenticated = require('../middlewares/auth_middleware');
const userValidator = require("../middlewares/validators").userValidator;
const UserService = require('../services/UserService');

const userRoutes = (router) => {
  router.get('/list-user',ensureAuthenticated, async function (req, res) {
    try {
      const _userInst = new UserService();
      let user= await _userInst.list();
      console.log(user);
      res.render('users',{user});
    } catch (error) {
      res.send(error);
    }
    
  });

  router.get('/add-user',ensureAuthenticated, function (req, res) {
    res.render('add-user');
  });

  router.get('/edit-user/:id',ensureAuthenticated, async function (req, res) {
    try {
      const _userInst = new UserService();
      let user= await _userInst.get(req.params.id);
      res.render('edit-user', { user });
    } catch (error) {
      res.send(error);
    }
  });

  router.post('/create',ensureAuthenticated, userValidator.createAPIValidation, async function (req, res) {
    try {
      const _userInst = new UserService();
      let user= await _userInst.create(req.body);
      res.redirect('/user/list-user');
    } catch (error) {
      res.send(error);
    }
  });
  
  router.post('/update/:id',ensureAuthenticated,userValidator.updateAPIValidation, async function (req, res) {
    try {
      const _userInst = new UserService();
      let user= await _userInst.update(req.params.id, req.body);
      res.redirect('/user/list-user');
    } catch (error) {
      res.send(error);
    }
  });

  router.get('/delete/:id',ensureAuthenticated, async function (req, res) {
    try {
      const _userInst = new UserService();
      let user= await _userInst.delete(req.params.id);
      res.redirect('/user/list-user');
    } catch (error) {
      res.send(error);
    }
  });
};

module.exports = userRoutes;
