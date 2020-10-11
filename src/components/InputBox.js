import React from 'react';

const InputBox = props => (
  <form onSubmit={props.handleSubmission}>
    <input
      className='inputBox'
      value={props.text}
      onChange={event => props.handleChange(event.target.value)}
      autoFocus
    />
  </form>
);
export default InputBox;
