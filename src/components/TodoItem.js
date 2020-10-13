import React from 'react';
import '../css/TodoItem.css';
import DeleteIcon from './DeleteIcon';
import Description from './Description';
import { useHover } from './hooks/hover';

const TodoItem = ({ item, update }) => {
  const [ref, isOnHover] = useHover();

  return (
    <div className='item' ref={ref}>
      <div className={item.status + ' status'}>&nbsp;</div>
      <Description item={item} onClick={update} />
      {isOnHover && (
        <DeleteIcon
          id={item.id}
          remove={id => update({ type: 'removeItem', itemId: id })}
        />
      )}
    </div>
  );
};

export default TodoItem;
