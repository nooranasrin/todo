import React from 'react';

const Description = ({ onClick, item }) => {
  const style =
    item.status === 'done' ? { textDecoration: 'line-through' } : {};
  return (
    <div style={{ width: '230px' }}>
      <div
        className='itemDescription'
        style={style}
        onClick={() => onClick(item.id)}
      >
        {item.title}
      </div>
    </div>
  );
};

export default Description;
