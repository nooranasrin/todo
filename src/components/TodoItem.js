import React from 'react';
import '../css/TodoItem.css';
import DeleteIcon from './DeleteIcon';
import Status from './Status';
import Description from './Description';
import { useHover } from './hooks/hover';

const TodoItem = ({ item, updateStatus, remove }) => {
  const [isOnHover, onMouseOver, onMouseLeave] = useHover();

  return (
    <div className='item' onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <Status status={item.status} />
      <Description item={item} onClick={updateStatus} />
      {isOnHover && <DeleteIcon id={item.id} remove={remove} />}
    </div>
  );
};

export default TodoItem;
