const express = require('express');

const app = express();

const controller = require('../controller/controller.js');

//routing methods
app.get('/', function(req, res) {res.render('index');});

app.get('/Site', function(req, res) {res.redirect('/');});

app.get('/Login', function(req, res) {res.render('login');});

app.get('/SignUp', function(req, res) {res.render('signup');});



app.use(function(req, res) {res.render('error404');});

module.exports = app;