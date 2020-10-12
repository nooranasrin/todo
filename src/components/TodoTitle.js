import React, { useState } from 'react';
import InputBox from './InputBox';
import Title from './Title';
import '../css/TodoTitle.css';

const TodoTitle = ({ reset }) => {
  const [inEditMode, setInEditMode] = useState(false);
  const [title, setTitle] = useState('Todo');

  const handleClick = todoTitle => {
    setInEditMode(!inEditMode);
    setTitle(todoTitle);
  };

  const titleElement = (
    <Title
      text={title}
      onClick={() => handleClick(title)}
      reset={() => {
        reset();
        setTitle('Todo');
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
