import React, { Component } from 'react';

export default class Input extends Component {
	render() {
		const { kind, ...other } = this.props;
		return <input className={`form-control ${kind}`} {...other} />;
	}
}
