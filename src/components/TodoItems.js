import React from 'react';
import TodoItem from './TodoItem';

const TodoItems = ({ items, remove }) => {
  const todoItems = items.map((item, index) => {
    return <TodoItem key={index} item={item} id={index} remove={remove} />;
  });
  return <div>{todoItems} </div>;
};

export default TodoItems;
