import React from 'react';
import '../css/Title.css';

const Title = ({ text, onClick }) => (
  <h1 className='title' onClick={onClick}>
    {text}
  </h1>
);

export default Title;
