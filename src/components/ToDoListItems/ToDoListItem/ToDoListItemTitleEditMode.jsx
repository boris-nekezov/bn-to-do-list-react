import React from 'react';
import Button from '../../UI/Button';
import Icon from '../../UI/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodoTitle } from '../../../actions/todosActions';

const ToDoListItemTitleEditMode = ({
	id,
	title,
	handleEditMode,
	handleRemove,
}) => {
	const dispatch = useDispatch();
	const currentTask = useSelector(state =>
		state.todos.todos.filter(task => task.id === id)
	);
	const currentTaskStatus = currentTask[0].completed;
	const handleUpdateTitle = (id, title) => {
		const data = {
			title: title,
			id: id,
			completed: currentTaskStatus,
		};
		dispatch(updateTodoTitle(data));
	};

	return (
		<div>
			<div className="row">
				<div className="col mb-2">
					<div
						role="group"
						aria-label="Basic example"
						className="btn-group btn-group-sm d-lg-none"
					>
						<Button
							kind="success"
							onClick={() => {
								handleUpdateTitle(id, title);
								handleEditMode();
							}}
						>
							Save
						</Button>
						<Button kind="warning" onClick={() => handleEditMode()}>
							Cancel
						</Button>
						<Button kind="danger d-lg-none" onClick={() => handleRemove(id)}>
							<Icon iconName="trash-o" />
						</Button>
					</div>
					<div
						role="group"
						aria-label="Basic example"
						className="btn-group btn-group-lg d-none d-lg-block"
					>
						<Button
							kind="success"
							onClick={() => {
								handleUpdateTitle(id, title);
								handleEditMode();
							}}
						>
							Save
						</Button>
						<Button kind="warning" onClick={() => handleEditMode()}>
							Cancel
						</Button>
						<Button kind="danger d-lg-none" onClick={() => handleRemove(id)}>
							<Icon iconName="trash-o" modifiers="mr-2" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ToDoListItemTitleEditMode;
