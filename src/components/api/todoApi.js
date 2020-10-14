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
  const callback = item => dispatch({ type: 'addItem', item });
  sendRequest('api/addItem', callback, { title });
};

const updateHeading = (dispatch, heading) => {
  const callback = heading => dispatch({ heading, type: 'updateHeading' });
  sendRequest('api/updateHeading', callback, { heading });
};

export default {
  fetchTodo,
  addItem,
  updateHeading,
};
