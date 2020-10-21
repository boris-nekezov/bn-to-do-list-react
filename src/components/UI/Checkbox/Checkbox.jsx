import React, { Component } from 'react'
import './Checkbox.css'

export default class Checkbox extends Component {
  render() {
    const { id, completed } = this.props;
    return (
      <div className="col-1 align-items-center">
      <input
        id={`ch${id}`}
        type="checkbox"
        defaultChecked={completed}
      />
      <label htmlFor={`ch${id}`} className="checkbox-label"></label>
      </div>
    )
  }
}
