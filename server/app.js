const express = require('express');
const fs = require('fs');
const todo = require('../data/todo.json');
const handlers = require('./handlers');

const app = express();
app.locals = { todo, fs, path: '../data/todo.json' };
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.url, req.method, req.body, req.headers);
  next();
});

app.get('/api/fetchTodo', handlers.serveTodo);
app.get('/api/resetTodo', handlers.resetTodo);
app.post('/api/addItem', handlers.addTodo);
app.post('/api/updateHeading', handlers.updateHeading);
app.post('/api/updateItemStatus', handlers.updateItemStatus);
app.post('/api/removeItem', handlers.removeItem);

module.exports = app;
