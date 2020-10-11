import React from 'react';

const DeleteIcon = props => (
  <div
    onClick={event => {
      event.stopPropagation();
      props.remove(props.id);
    }}
  >
    X
  </div>
);

export default DeleteIcon;
