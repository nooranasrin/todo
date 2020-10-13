import React from 'react';
import TodoItem from './TodoItem';

const TodoItems = ({ items, update }) => {
  const todoItems = items.map(item => {
    return <TodoItem key={item.id} item={item} update={update} />;
  });
  return <div>{todoItems} </div>;
};

export default TodoItems;
