import React from 'react';
import Button from '../Button';
import Icon from '../UI/Icon';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../actions/todosActions';
const ToDoListEditMobile = ({
	handleUpdateTitle,
	handleEditMode,
	id,
	title,
}) => {
	const dispatch = useDispatch();
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
	);
};

export default ToDoListEditMobile;
