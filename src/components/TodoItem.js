import React from 'react';
import '../css/TodoItem.css';
import DeleteIcon from './DeleteIcon';
import Description from './Description';
import { useHover } from './hooks/hover';

const TodoItem = ({ item, updateStatus, remove }) => {
  const [isOnHover, onMouseOver, onMouseLeave] = useHover();

  return (
    <div className='item' onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <div className={item.status + ' status'}>&nbsp;</div>
      <Description item={item} onClick={updateStatus} />
      {isOnHover && <DeleteIcon id={item.id} remove={remove} />}
    </div>
  );
};

export default TodoItem;
