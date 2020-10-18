import React from 'react';
import '../css/TodoItem.css';
import DeleteIcon from './DeleteIcon';
import Description from './Description';
import { useHover } from '../hooks/hover';

const TodoItem = ({ item, update, TodoApi }) => {
  const [ref, isOnHover] = useHover();

  return (
    <div className='item' ref={ref}>
      <div className={item.status + ' status'}>&nbsp;</div>
      <Description
        item={item}
        onClick={id => TodoApi.updateItemStatus(update, id)}
      />
      {isOnHover && (
        <DeleteIcon
          id={item.id}
          remove={id => TodoApi.removeItem(update, id)}
        />
      )}
    </div>
  );
};

export default TodoItem;
