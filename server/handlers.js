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
  res.json(todo);
};

const updateHeading = (req, res) => {
  const { heading } = req.body;
  const { todo, fs, path } = req.app.locals;
  todo.heading = heading;
  fs.writeFileSync(path, JSON.stringify(todo));
  res.json(todo);
};

const resetTodo = (req, res) => {
  const { fs, path } = req.app.locals;
  const newTodo = { items: [], id: 0, heading: 'Todo' };
  fs.writeFileSync(path, JSON.stringify(newTodo));
  res.json(newTodo);
};

const updateItemStatus = (req, res) => {
  const { id } = req.body;
  const { todo, fs, path } = req.app.locals;
  const status = { notDone: 'doing', doing: 'done', done: 'notDone' };
  const item = todo.items.find(item => item.id === id);
  item.status = status[item.status];
  fs.writeFileSync(path, JSON.stringify(todo));
  res.json(todo);
};

const removeItem = (req, res) => {
  const { id } = req.body;
  const { todo, fs, path } = req.app.locals;
  const item = todo.items.find(item => item.id === id);
  const index = todo.items.indexOf(item);
  todo.items.splice(index, 1);
  fs.writeFileSync(path, JSON.stringify(todo));
  res.json(todo);
};

module.exports = {
  serveTodo,
  addTodo,
  updateHeading,
  resetTodo,
  updateItemStatus,
  removeItem,
};
