import React from 'react';
import TodoItem from './TodoItem';

const TodoItems = props => {
  const todoItems = props.items.map((item, index) => {
    return (
      <TodoItem key={index} item={item} id={index} remove={props.remove} />
    );
  });
  return <div>{todoItems} </div>;
};

export default TodoItems;
