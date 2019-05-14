import React from 'react';
import './DeleteButton.scss';

const DeleteButton = ({click}) => {
  return(
    <div className="delete__btn" onClick={click}>x</div>
  );
};

export default DeleteButton;