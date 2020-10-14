const sendRequest = (url, callback) => {
  fetch(url)
    .then(res => res.json())
    .then(callback);
};

const fetchTodo = dispatch => {
  sendRequest('/api/fetchTodo', todo => dispatch({ type: 'resetTodo', todo }));
};

export default {
  fetchTodo,
};
