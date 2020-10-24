import React, { Component } from 'react'
import './Checkbox.css'

export default class Checkbox extends Component {
  render() {
    const { 
      id, 
      title,
      completed,  
      handleUpdateCheckbox
    } = this.props;
    return (
      <div className="align-items-center">
      <input
        id={`ch${id}`}
        type="checkbox"
        defaultChecked={completed}
      />
      <label 
        htmlFor={`ch${id}`} 
        className="checkbox-label"
        onClick={() => {handleUpdateCheckbox(id, title, completed);}}
      ></label>
      </div>
    )
  }
}
