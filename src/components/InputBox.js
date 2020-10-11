import React from 'react';

const InputBox = props => (
  <form
    onSubmit={event => {
      event.preventDefault();
      props.handleSubmission();
    }}
  >
    <input
      className='inputBox'
      value={props.text}
      onChange={event => props.handleChange(event.target.value)}
      autoFocus
    />
  </form>
);
export default InputBox;
