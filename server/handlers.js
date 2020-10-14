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
  console.log(req.body);
  const { heading } = req.body;
  const { todo, fs, path } = req.app.locals;
  todo.heading = heading;
  fs.writeFileSync(path, JSON.stringify(todo));
  res.json(heading);
};

module.exports = { serveTodo, addTodo, updateHeading };
