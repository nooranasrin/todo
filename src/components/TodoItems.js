import React from 'react';
import TodoItem from './TodoItem';

const TodoItems = ({ items, update, TodoApi }) => {
  const todoItems = items.map(item => {
    return (
      <TodoItem key={item.id} item={item} update={update} TodoApi={TodoApi} />
    );
  });
  return <div>{todoItems} </div>;
};

export default TodoItems;
