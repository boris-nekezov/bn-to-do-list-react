import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    const { 
      type, 
      placeholder,
      value, 
      modifier,
      handleChange, 
      name, 
      config 
    } = this.props;
    return (
      <input 
        type={type} 
        placeholder={placeholder}
        value={value}
        className={`form-control ${modifier}`}
        onChange={handleChange}
        name={name}
        {...config}
      />
    )
  }
}
