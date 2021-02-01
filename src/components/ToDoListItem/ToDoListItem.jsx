import React, { useState } from 'react';
import Button from '../UI/Button';
import Checkbox from '../UI/Checkbox/Checkbox';
import Icon from '../UI/Icon';
import ToDoListItemTitle from './ToDoListItemTitle';

const ToDoListItem = ({
	todo,
	handleRemove,
	handleUpdateTitle,
	handleChange,
	title,
	handleCurrentTitle,
	handleUpdateCheckbox,
}) => {
	const [isInEditMode, setIsInEditMode] = useState(false);

	const handleEditMode = () => {
		setIsInEditMode(!isInEditMode);
	};

	return (
		<div className="jumbotron mb-2 py-3 px-3">
			<div className="row">
				<div className="col-2 col-lg-1 align-items-center">
					<Checkbox
						id={todo.id}
						title={todo.title}
						completed={todo.completed}
						handleUpdateCheckbox={handleUpdateCheckbox}
					/>
				</div>

				<ToDoListItemTitle
					id={todo.id}
					title={title}
					label={todo.title}
					handleUpdateTitle={handleUpdateTitle}
					handleChange={handleChange}
					handleEditMode={handleEditMode}
					isInEditMode={isInEditMode}
					handleCurrentTitle={handleCurrentTitle}
					handleRemove={handleRemove}
				/>

				<div className="col-12 col-lg-2 align-items-center">
					{isInEditMode ? (
						<Button
							kind="danger d-none d-lg-block"
							onClick={() => handleRemove(todo.id)}
						>
							<Icon iconName="trash-o" modifiers="mr-2" />
							Delete
						</Button>
					) : (
						<div style={{ width: '100%' }}>
							<Button
								kind="warning btn-block btn-sm d-lg-none"
								onClick={() => {
									handleCurrentTitle(todo.title);
									handleEditMode();
								}}
							>
								<Icon iconName="pencil" modifiers="mr-2" />
								Edit
							</Button>
							<Button
								kind="warning btn-block d-none d-lg-block"
								onClick={() => {
									handleCurrentTitle(todo.title);
									handleEditMode();
								}}
							>
								<Icon iconName="pencil" modifiers="mr-2" />
								Edit
							</Button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ToDoListItem;
