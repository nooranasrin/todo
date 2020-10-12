import React from 'react';

const Description = ({ style, onClick, item }) => (
  <div style={{ width: '230px' }}>
    <div className='itemDescription' style={style} onClick={onClick}>
      {item}
    </div>
  </div>
);

export default Description;
