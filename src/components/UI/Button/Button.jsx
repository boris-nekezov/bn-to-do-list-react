import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <button className={`btn btn-${this.props.modifiers}`}>
        {this.props.children}
      </button>
    )
  }
}
