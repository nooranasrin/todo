import React, { useState } from 'react';
import '../css/Title.css';
import DeleteIcon from './DeleteIcon';

const Title = ({ onClick, text, reset }) => {
  const [isOnHover, setIsOnHover] = useState(false);

  return (
    <div
      className='title'
      onMouseOver={() => setIsOnHover(true)}
      onMouseLeave={() => setIsOnHover(false)}
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
