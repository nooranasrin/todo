import React, { useState } from 'react';
import InputBox from './InputBox';
import Title from './Title';
import '../css/TodoTitle.css';

const TodoTitle = ({ update, title, TodoApi }) => {
  const [inEditMode, setInEditMode] = useState(false);

  const handleClick = todoTitle => {
    setInEditMode(!inEditMode);
    TodoApi.updateHeading(update, todoTitle);
  };

  const titleElement = (
    <Title
      text={title}
      onClick={() => setInEditMode(!inEditMode)}
      reset={() => TodoApi.resetTodo(update)}
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
