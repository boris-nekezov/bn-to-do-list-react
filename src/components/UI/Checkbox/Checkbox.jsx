import React from 'react';
import './Checkbox.css';

const Checkbox = ({ id, title, completed, handleUpdateCheckbox }) => {
	return (
		<div className="align-items-center">
			<input id={`ch${id}`} type="checkbox" defaultChecked={completed} />
			<label
				htmlFor={`ch${id}`}
				className="checkbox-label"
				onClick={() => handleUpdateCheckbox(id, title, completed)}
			></label>
		</div>
	);
};

export default Checkbox;
