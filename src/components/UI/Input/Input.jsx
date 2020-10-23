import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    const { 
      type, 
      id,
      placeholder,
      value, 
      modifier,
      handleChange, 
      name
    } = this.props;
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
  }
}
