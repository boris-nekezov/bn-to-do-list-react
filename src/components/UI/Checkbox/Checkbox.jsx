import React, { Component } from 'react'
import './Checkbox.css'

export default class Checkbox extends Component {
  render() {
    return (
      <div className="col-1 align-items-center">
      <input
        id="1"
        type="checkbox"
      />
      <label htmlFor="1"></label>
      </div>
    )
  }
}
