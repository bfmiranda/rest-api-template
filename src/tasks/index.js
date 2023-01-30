'use strict';

const errors = require('../errors');

const redis = require("redis");

exports.findAll = (req, res, next) => {
  // Simulate task list, normally this would be retrieved from a database
  const tasks = [
    {'_id': 1, 'name': 'milk'},
    {'_id': 2, 'name': 'cheese'},
    {'_id': 3, 'name': 'milkeeeee'}
  ];

  client.on('error', err => {
  console.log('Error ' + err);

});

  res.status(200).json(tasks);
};

exports.findRedis = (req, res, next) => {
  // Simulate task list, normally this would be retrieved from a database

  const redisclient = redis.createClient();
  
  (async () => {
    await redisclient.connect();
  })();
  
  console.log("Connecting to the Redis");
  
  redisclient.on("ready", () => {
    console.log("Connected!");
  });
  
  redisclient.on("error", (err) => {
    console.log("Error in the Connection");
  });
  
  
  client.on('error', err => {
  console.log('Error ' + err);

});

  res.status(200);
};

exports.buggyRoute = (req, res, next) => {
  // Simulate a custom error
  next(errors.newHttpError(400, 'bad request'));
};
