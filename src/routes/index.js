const express = require('express');
const router = express.Router();
const userServices = require('../services/UserService');

// GET home page
router.get('/', function(req, res) {
    res.render('index', { title: 'CI Demo' });
});

// GET Userlist page
router.get('/userlist', function(req, res) {
    userServices.userlist(req, res)
});

// GET User details
router.get('/userdetails', function(req, res) {
    userServices.userDetails(req, res)
});

// GET New User page
router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});

// POST to Add User Service
router.post('/adduser', function(req, res) {
    userServices.adduser(req, res)
});


module.exports = router;