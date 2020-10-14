import React, { useEffect, useReducer } from 'react';
import TodoItems from './TodoItems';
import TodoTitle from './TodoTitle';
import '../css/Todo.css';
import InputBox from './InputBox';
import TodoApi from './api/todoApi';
import reducer from './reducer';

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, null);

  useEffect(() => {
    TodoApi.fetchTodo(dispatch);
  }, []);

  if (!state) {
    return <div className='todo'>Loading</div>;
  }

  return (
    <div className='todo'>
      <TodoTitle update={dispatch} title={state.heading} TodoApi={TodoApi} />
      <TodoItems items={state.items} update={dispatch} />{' '}
      <InputBox onSubmit={item => TodoApi.addItem(dispatch, item)} />
    </div>
  );
};

export default Todo;
