import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <input 
        type={this.props.type} 
        placeholder={this.props.placeholder}
        className={`form-control ${this.props.modifiers}`} 
      />
    )
  }
}
