import React, { Component } from 'react';

export default class Button extends Component {
	render() {
		const { kind, children, ...other } = this.props;
		return (
			<button className={`btn btn-${kind}`} {...other}>
				{children}
			</button>
		);
	}
}
