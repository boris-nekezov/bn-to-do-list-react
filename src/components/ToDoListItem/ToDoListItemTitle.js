import React from 'react';
import Input from '../Input';

import { useDispatch, useSelector } from 'react-redux';
import { updateTodoTitle } from '../../actions/todosActions';
import ToDoListItemEditMobile from './ToDoListItemEditMobile';

const ToDoListItemTitle = ({
	id,
	title,
	handleChange,
	label,
	handleEditMode,
	isInEditMode,
	handleCurrentTitle,
}) => {
	const dispatch = useDispatch();
	const currentTask = useSelector(state =>
		state.todosState.todos.filter(task => task.id === id)
	);
	const currentTaskStatus = currentTask[0].completed;

	const handleUpdateTitle = (id, title) => {
		dispatch(
			updateTodoTitle({
				title: title,
				id: id,
				completed: currentTaskStatus,
			})
		);
	};

	return (
		<div className="col-10 col-lg-9 align-items-center">
			<div className="container">
				<div className="row">
					<div className="col">
						{isInEditMode ? (
							<div className="mb-2">
								<Input
									type="text"
									id={`in${id}`}
									value={title}
									name="title"
									onChange={handleChange}
								/>
							</div>
						) : (
							<label
								htmlFor={`in${id}`}
								className="input-label"
								onClick={() => {
									handleCurrentTitle(label);
									handleEditMode();
								}}
							>
								{label}
							</label>
						)}
					</div>
				</div>
				{/* edit mode for mobile */}
				{isInEditMode && (
					<ToDoListItemEditMobile
						handleUpdateTitle={handleUpdateTitle}
						handleEditMode={handleEditMode}
						id={id}
						title={title}
					/>
				)}
			</div>
		</div>
	);
};

export default ToDoListItemTitle;
