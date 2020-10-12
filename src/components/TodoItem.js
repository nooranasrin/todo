import React, { useState } from 'react';
import '../css/TodoItem.css';
import DeleteIcon from './DeleteIcon';
import Status from './Status';
import Description from './Description';

const TodoItem = ({ item, updateStatus, remove }) => {
  const [isOnHover, setIsOnHover] = useState(false);

  return (
    <div
      className='item'
      onMouseOver={() => setIsOnHover(true)}
      onMouseLeave={() => setIsOnHover(false)}
    >
      <Status status={item.status} />
      <Description item={item} onClick={updateStatus} />
      {isOnHover && <DeleteIcon id={item.id} remove={remove} />}
    </div>
  );
};

export default TodoItem;
