import React, { Component } from 'react';

class HeaderTitle extends Component {
	render() {
		return (
			<div className="alert alert-success my-2">
				<h1 className="text-center">{this.props.title}</h1>
			</div>
		);
	}
}

export default HeaderTitle;
