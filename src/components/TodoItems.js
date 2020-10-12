import React from 'react';
import TodoItem from './TodoItem';

const TodoItems = ({ items, remove, updateStatus }) => {
  const todoItems = items.map(item => {
    return (
      <TodoItem
        key={item.id}
        item={item}
        updateStatus={updateStatus}
        remove={remove}
      />
    );
  });
  return <div>{todoItems} </div>;
};

export default TodoItems;
