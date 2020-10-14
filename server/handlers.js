const serveTodo = (req, res) => {
  res.json(req.app.locals.todo);
};

module.exports = { serveTodo };
