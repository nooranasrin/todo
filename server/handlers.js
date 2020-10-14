const serveTodo = (req, res) => {
  res.json(req.app.locals.todo);
};

const addTodo = (req, res) => {
  const { title } = req.body;
  const { todo, fs, path } = req.app.locals;
  const newItem = { title: title, status: 'notDone', id: todo.id + 1 };
  todo.id = todo.id + 1;
  todo.items.push(newItem);
  fs.writeFileSync(path, JSON.stringify(todo));
  res.json(newItem);
};

const updateHeading = (req, res) => {
  const { heading } = req.body;
  const { todo, fs, path } = req.app.locals;
  todo.heading = heading;
  fs.writeFileSync(path, JSON.stringify(todo));
  res.json(heading);
};

const resetTodo = (req, res) => {
  const { fs, path } = req.app.locals;
  const newTodo = { items: [], id: 0, heading: 'Todo' };
  fs.writeFileSync(path, JSON.stringify(newTodo));
  res.json(newTodo);
};

module.exports = { serveTodo, addTodo, updateHeading, resetTodo };
