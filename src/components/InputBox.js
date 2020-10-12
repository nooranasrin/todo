import React from 'react';

const InputBox = ({ handleSubmission, handleChange, text }) => (
  <form
    onSubmit={event => {
      event.preventDefault();
      handleSubmission();
    }}
  >
    <input
      className='inputBox'
      value={text}
      onChange={event => handleChange(event.target.value)}
      autoFocus
    />
  </form>
);
export default InputBox;
