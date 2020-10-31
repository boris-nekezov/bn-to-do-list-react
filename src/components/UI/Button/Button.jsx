import React from 'react';

const Button = ({ kind, children, ...other }) => {
	return (
		<button className={`btn btn-${kind}`} {...other}>
			{children}
		</button>
	);
};

export default Button;
