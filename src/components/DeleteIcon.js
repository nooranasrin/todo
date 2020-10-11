import React from 'react';
const DeleteIcon = props => (
  <div
    style={{ cursor: 'pointer' }}
    onClick={event => {
      event.stopPropagation();
      props.remove(props.id);
    }}
  >
    X
  </div>
);

export default DeleteIcon;
