import React, { useState } from 'react';
import InputBox from './InputBox';
import Title from './Title';
import '../css/TodoTitle.css';

const TodoTitle = ({ update, title }) => {
  const [inEditMode, setInEditMode] = useState(false);

  const handleClick = todoTitle => {
    setInEditMode(!inEditMode);
    update({ heading: todoTitle, type: 'updateHeading' });
  };

  const titleElement = (
    <Title
      text={title}
      onClick={() => handleClick(title)}
      reset={() => update({ type: 'resetTodo' })}
    />
  );

  const inputBoxElement = (
    <div className='editableTitle'>
      <InputBox onSubmit={handleClick} value={title} />
    </div>
  );

  return !inEditMode ? titleElement : inputBoxElement;
};

export default TodoTitle;
