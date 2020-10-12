import React from 'react';

const Description = ({ status, onClick, item }) => {
  const style = status === 'done' ? { textDecoration: 'line-through' } : {};
  return (
    <div style={{ width: '230px' }}>
      <div className='itemDescription' style={style} onClick={onClick}>
        {item}
      </div>
    </div>
  );
};

export default Description;
