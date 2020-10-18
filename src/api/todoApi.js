const sendRequest = (url, callback, body) => {
  const options = {};
  if (body) {
    options.method = 'POST';
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(body);
  }
  fetch(url, options)
    .then(res => res.json())
    .then(callback);
};

const fetchTodo = dispatch => {
  sendRequest('/api/fetchTodo', todo => dispatch({ type: 'resetTodo', todo }));
};

const addItem = (dispatch, title) => {
  const callback = todo => dispatch({ type: 'addItem', todo });
  sendRequest('api/addItem', callback, { title });
};

const updateHeading = (dispatch, heading) => {
  const callback = todo => dispatch({ todo, type: 'updateHeading' });
  sendRequest('api/updateHeading', callback, { heading });
};

const resetTodo = dispatch => {
  sendRequest('api/resetTodo', todo => dispatch({ type: 'resetTodo', todo }));
};

const updateItemStatus = (dispatch, id) => {
  const callback = todo => dispatch({ todo, type: 'updateStatus' });
  sendRequest('api/updateItemStatus', callback, { id });
};

const removeItem = (dispatch, id) => {
  const callback = todo => dispatch({ todo, type: 'removeItem' });
  sendRequest('api/removeItem', callback, { id });
};

export default {
  fetchTodo,
  addItem,
  updateHeading,
  resetTodo,
  updateItemStatus,
  removeItem,
};
