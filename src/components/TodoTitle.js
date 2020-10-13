import React, { useState } from 'react';
import InputBox from './InputBox';
import Title from './Title';
import '../css/TodoTitle.css';

const TodoTitle = ({ reset, update, title }) => {
  const [inEditMode, setInEditMode] = useState(false);

  const handleClick = todoTitle => {
    setInEditMode(!inEditMode);
    update(todoTitle);
  };

  const titleElement = (
    <Title
      text={title}
      onClick={() => handleClick(title)}
      reset={() => {
        reset();
        update();
      }}
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
