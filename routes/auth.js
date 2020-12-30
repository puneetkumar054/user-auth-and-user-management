const { skips } = require("debug");
const { fileLoader } = require("ejs");
const express = require("express");
const passport = require('passport');
const ensureAuthenticated = require('../middlewares/auth_middleware');

const authRoutes = (router) => {
    router.get('/', function (req, res) {
        if (req.user) {
            res.redirect('/profile');
        } else {
            res.redirect('/login');
        }
    });

    router.get('/login', function (req, res) {
        if (req.user) {
            res.redirect('/profile');
        } else {
            res.render('index', { user: req.user, title: 'Facebook Login' });
        }
    });

    router.get('/authenticate/facebook',
        passport.authenticate('facebook', { authType: 'reauthenticate', scope: ['email', 'public_profile'] }));

    router.get('/authenticate/facebook/callback',
        passport.authenticate('facebook', { successRedirect: '/profile', failureRedirect: '/login' }),
        function (req, res) {
            res.redirect('/profile');
        });

    router.get('/profile', ensureAuthenticated, function (req, res) {
        res.render('profile', { user: req.user });
    });

    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/login');
    });

};

module.exports = authRoutes;
