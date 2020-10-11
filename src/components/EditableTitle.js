import React from 'react';
import '../css/EditableTitle.css';
import InputBox from './InputBox';

const EditableTitle = ({ onSubmit, onChange, text }) => (
  <div className='EditableTitle'>
    <InputBox handleSubmission={onSubmit} handleChange={onChange} text={text} />
  </div>
);
export default EditableTitle;
