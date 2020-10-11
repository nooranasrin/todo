import React from 'react';

const DeleteIcon = props => (
  <div
    className='deleteIcon'
    onClick={event => {
      event.stopPropagation();
      props.remove(props.id);
    }}
  >
    X
  </div>
);

export default DeleteIcon;
