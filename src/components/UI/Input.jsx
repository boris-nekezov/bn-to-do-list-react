import React from 'react';

const Input = ({ kind, ...other }) => {
	return <input className={`form-control ${kind}`} {...other} />;
};

export default Input;
