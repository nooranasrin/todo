const addItem = ({ items, id, heading }, title) => {
  const itemsList = items.concat({ title, status: 'notDone', id: id + 1 });
  return { items: itemsList, id: id + 1, heading };
};

const removeItem = ({ items, id, heading }, itemId) => {
  const itemsList = items.map(item => Object.assign({}, item));
  const item = itemsList.find(item => item.id === itemId);
  const index = itemsList.indexOf(item);
  itemsList.splice(index, 1);
  return { items: itemsList, id, heading };
};

const updateStatus = ({ items, id, heading }, itemId) => {
  const status = { notDone: 'doing', doing: 'done', done: 'notDone' };
  const itemsList = items.map(item => Object.assign({}, item));
  const item = itemsList.find(item => item.id === itemId);
  item.status = status[item.status];
  return { items: itemsList, id, heading };
};

const update = (state, action) => {
  switch (action.type) {
    case 'addItem':
      return addItem(state, action.item);
    case 'removeItem':
      return removeItem(state, action.itemId);
    case 'updateStatus':
      return updateStatus(state, action.itemId);
    case 'resetTodo':
      return action.todo;
    case 'updateHeading':
      return { items: state.items, id: state.id, heading: action.heading };
    default:
      return state;
  }
};

export default update;
