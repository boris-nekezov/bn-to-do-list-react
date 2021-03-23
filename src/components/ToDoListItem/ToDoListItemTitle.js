import React from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Icon from '../UI/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodoTitle, removeTodo } from '../../actions/todosActions';

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

				{isInEditMode && (
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
									<Button
										kind="danger d-lg-none"
										onClick={() => dispatch(removeTodo(id))}
									>
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
									<Button
										kind="danger d-lg-none"
										onClick={() => dispatch(removeTodo(id))}
									>
										<Icon iconName="trash-o" modifiers="mr-2" />
									</Button>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ToDoListItemTitle;
