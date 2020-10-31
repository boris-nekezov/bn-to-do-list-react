import React, { Component } from 'react';

export default class Icon extends Component {
	render() {
		return (
			<i className={`fa fa-${this.props.iconName} ${this.props.modifiers}`}></i>
		);
	}
}
