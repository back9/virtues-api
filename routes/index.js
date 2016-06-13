'use strict';
const express = require('express');
const userRoutes = require('./user');

module.exports.init = function(app) {
  // define url stems
  app.use('/user', userRoutes);
};