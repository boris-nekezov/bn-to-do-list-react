import React from 'react';

const Icon = ({ iconName, modifiers }) => {
	return <i className={`fa fa-${iconName} ${modifiers}`}></i>;
};

export default Icon;
