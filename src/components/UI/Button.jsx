import React from 'react';

const Button = ({ kind, children, ...other }) => {
	return (
		<button {...other} className={`btn btn-${kind}`}>
			{children}
		</button>
	);
};

export default Button;
