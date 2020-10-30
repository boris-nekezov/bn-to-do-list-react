import React from 'react';

const Input = ({
  type, 
  id,
  placeholder,
  value, 
  modifier,
  handleChange, 
  name
}) => {
  return (
    <input 
      type={type}
      id={id} 
      placeholder={placeholder}
      value={value}
      className={`form-control ${modifier}`}
      onChange={handleChange}
      name={name}
    />
  )
};

export default Input;