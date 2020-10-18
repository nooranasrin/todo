import React from 'react';

const DeleteIcon = ({ remove, id }) => (
  <div
    style={{ cursor: 'pointer' }}
    onClick={event => {
      event.stopPropagation();
      remove(id);
    }}
  >
    X
  </div>
);

export default DeleteIcon;
