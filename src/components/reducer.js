const update = (state, action) => {
  switch (action.type) {
    case 'addItem':
    case 'removeItem':
    case 'updateStatus':
    case 'resetTodo':
    case 'updateHeading':
      return action.todo;
    default:
      return state;
  }
};

export default update;
