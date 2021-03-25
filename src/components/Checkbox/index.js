import React from 'react';
import './style.css';

const Checkbox = ({ id, completed, ...other }) => {
	return (
		<div className="align-items-center">
			<input id={`ch${id}`} type="checkbox" defaultChecked={completed} />
			<label {...other} htmlFor={`ch${id}`} className="checkbox-label"></label>
		</div>
	);
};

export default Checkbox;
