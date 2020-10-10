import React from 'react';

const EditableTitle = ({ onSubmit, onChange, text }) => (
  <div className='EditableTitle'>
    <form onSubmit={onSubmit}>
      <input
        className='inputBox'
        value={text}
        onChange={event => onChange(event.target.value)}
      />
    </form>
  </div>
);

export default EditableTitle;
