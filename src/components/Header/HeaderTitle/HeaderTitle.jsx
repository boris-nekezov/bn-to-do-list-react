import React from 'react';

const HeaderTitle = ({ title }) => {
	return (
		<div className="alert alert-success my-2">
			<h1 className="text-center">{title}</h1>
		</div>
	);
};

export default HeaderTitle;
