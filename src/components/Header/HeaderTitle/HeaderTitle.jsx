import React from 'react';

<<<<<<< HEAD
class HeaderTitle extends Component {
	render() {
		return (
			<div className="alert alert-success my-2">
				<h1 className="text-center">{this.props.title}</h1>
			</div>
		);
	}
}
=======
const HeaderTitle = ({ title }) => {
	return (
		<div className="alert alert-success my-2">
			<h1 className="text-center">{title}</h1>
		</div>
	);
};
>>>>>>> v2-functional-components-props

export default HeaderTitle;
