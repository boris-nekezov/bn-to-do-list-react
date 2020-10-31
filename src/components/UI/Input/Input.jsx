import React from 'react';

const Input = ({
	kind,
	// // type,
	// // id,
	// // placeholder,
	// // value,
	// // modifier,
	// // handleChange,
	// name,
	...other
}) => {
	return (
		<input
			className={`form-control ${kind}`}
			// // type={type}
			// id={id}
			// placeholder={placeholder}
			// value={value}
			// onChange={handleChange}
			// name={name}
			{...other}
		/>
	);
};

export default Input;
