const express = require('express');
const todo = require('../data/todo.json');
const handlers = require('./handlers');

const app = express();
app.locals = { todo };

app.use((req, res, next) => {
  console.log(req.url, req.headers);
  next();
});

app.get('/api/fetchTodo', handlers.serveTodo);

module.exports = app;
