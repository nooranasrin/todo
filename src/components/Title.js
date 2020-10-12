import React from 'react';
import '../css/Title.css';
import DeleteIcon from './DeleteIcon';
import { useHover } from './hooks/hover';

const Title = ({ onClick, text, reset }) => {
  const [isOnHover, onMouseOver, onMouseLeave] = useHover();

  return (
    <div
      className='title'
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <div style={{ width: '260px' }}>
        <div className='titleText' onClick={onClick}>
          {' '}
          {text}{' '}
        </div>
      </div>
      {isOnHover && <DeleteIcon remove={reset} />}
    </div>
  );
};

export default Title;
