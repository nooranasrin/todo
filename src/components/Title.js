import React from 'react';
import '../css/Title.css';
import DeleteIcon from './DeleteIcon';
import { useHover } from '../hooks/hover';

const Title = ({ onClick, text, reset }) => {
  const [ref, isOnHover] = useHover();
  return (
    <div className='title' ref={ref}>
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
