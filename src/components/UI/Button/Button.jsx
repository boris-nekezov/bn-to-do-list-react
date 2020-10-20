import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const { modifiers, clicked, children } = this.props;
    return (
      <button 
        className={`btn btn-${modifiers}`} 
        onClick={clicked}
      >
        {children}
      </button>
    )
  }
}
