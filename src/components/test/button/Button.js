import React from 'react';
import './Button.css';

const Button = ({ label }) => {
  return (
    <button data-testid='btn' className='btn-own-style'>
      {label}
    </button>
  );
};

export default Button;
