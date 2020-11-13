import React from 'react';
import ToDoListItem from './ToDoListItem/ToDoListItem';

const ToDoListItems = ({
	todos,
	handleRemove,
	handleUpdateTitle,
	handleChange,
	title,
	handleCurrentTitle,
	handleUpdateCheckbox,
}) => {
	return (
		<div className="alert alert-success">
			{todos.map(todo => (
				<ToDoListItem
					todo={todo}
					key={todo.id}
					title={title}
					handleRemove={handleRemove}
					handleUpdateTitle={handleUpdateTitle}
					handleChange={handleChange}
					handleCurrentTitle={handleCurrentTitle}
					handleUpdateCheckbox={handleUpdateCheckbox}
				/>
			))}
		</div>
	);
};

export default ToDoListItems;
