const { response } = require('express');
const express = require('express');
const path = require('path');
const app = require('./app');

const pathToIndex = path.resolve(__dirname, '../client/index.html');

module.exports = app.listen(3000, () => {
    console.log('App running on port: ${3000}');
  });

  app.use('/*', (request, response) => {
    response.sendFile(pathToIndex);
  });