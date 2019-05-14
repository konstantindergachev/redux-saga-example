import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = () => {
  return(
    <Link to="/"><button type="button"  className="btn btn__back">Back to user list</button></Link>
  );
};

export default Button;