import React, { useState } from 'react';

const InputBox = ({ onSubmit, value = '' }) => {
  const [text, setText] = useState(value);

  const handleSubmission = event => {
    event.preventDefault();
    setText('');
    onSubmit(text);
  };

  return (
    <form onSubmit={handleSubmission}>
      <input
        className='inputBox'
        value={text}
        onChange={event => setText(event.target.value)}
        autoFocus
      />
    </form>
  );
};

export default InputBox;
