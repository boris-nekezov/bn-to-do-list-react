import React, { useState } from 'react';
import Checkbox from '../Checkbox';
import ToDoListItemTitle from './ToDoListItemTitle';
import { updateTodoCheckbox } from '../../actions/todosActions';
import { useDispatch } from 'react-redux';
import ToDoListItemEditDesktop from './ToDoListItemEditDesktop';

const ToDoListItem = ({ todo, handleChange, title, handleCurrentTitle }) => {
	const [isInEditMode, setIsInEditMode] = useState(false);
	const dispatch = useDispatch();
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
						onClick={() =>
							dispatch(
								updateTodoCheckbox({
									title: todo.title,
									completed: !todo.completed,
									id: todo.id,
								})
							)
						}
					/>
				</div>

				<ToDoListItemTitle
					id={todo.id}
					title={title}
					label={todo.title}
					handleChange={handleChange}
					handleEditMode={handleEditMode}
					isInEditMode={isInEditMode}
					handleCurrentTitle={handleCurrentTitle}
				/>

				<ToDoListItemEditDesktop
					isInEditMode={isInEditMode}
					id={todo.id}
					title={todo.title}
					handleCurrentTitle={handleCurrentTitle}
					handleEditMode={handleEditMode}
				/>
			</div>
		</div>
	);
};

export default ToDoListItem;
