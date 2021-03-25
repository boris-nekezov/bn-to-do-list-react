import React from 'react';
import Button from '../Button';
import Icon from '../UI/Icon';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../actions/todosActions';

const ToDoListItemEditDesktop = ({
	isInEditMode,
	id,
	title,
	handleCurrentTitle,
	handleEditMode,
}) => {
	const dispatch = useDispatch();
	return (
		<div className="col-12 col-lg-2 align-items-center">
			{isInEditMode ? (
				<Button
					kind="danger d-none d-lg-block"
					onClick={() => dispatch(removeTodo(id))}
				>
					<Icon iconName="trash-o" modifiers="mr-2" />
					Delete
				</Button>
			) : (
				<div style={{ width: '100%' }}>
					<Button
						kind="warning btn-block btn-sm d-lg-none"
						onClick={() => {
							handleCurrentTitle(title);
							handleEditMode();
						}}
					>
						<Icon iconName="pencil" modifiers="mr-2" />
						Edit
					</Button>
					<Button
						kind="warning btn-block d-none d-lg-block"
						onClick={() => {
							handleCurrentTitle(title);
							handleEditMode();
						}}
					>
						<Icon iconName="pencil" modifiers="mr-2" />
						Edit
					</Button>
				</div>
			)}
		</div>
	);
};

export default ToDoListItemEditDesktop;
