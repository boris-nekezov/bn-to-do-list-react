import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import ToDoListItem from '../components/ToDoListItem/ToDoListItem';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchTodos,
	addTodo,
	removeTodo,
	updateTodoCheckbox,
} from '../actions/todosActions';

const ToDoList = () => {
	// local state
	const [titleAdd, setTitleAdd] = useState('');
	const [title, setTitle] = useState('');
	const [completed, setCompleted] = useState(false);

	const dispatch = useDispatch();
	const todosRedux = useSelector(state => state.todos.todos);

	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);

	const handleChange = event => {
		const { value, name } = event.currentTarget;
		if (name === 'titleAdd') {
			setTitleAdd(value);
		}
		if (name === 'title') {
			setTitle(value);
		}
	};

	const handleCurrentTitle = titleCurrent => {
		setTitle(titleCurrent);
	};

	const handlePost = event => {
		event.preventDefault();
		// add the data we want to post
		const data = {
			title: titleAdd,
			completed: completed,
		};
		dispatch(addTodo(data));
		// reset the value of add text field
		setTitleAdd('');
	};

	const handleRemove = id => {
		dispatch(removeTodo(id));
	};

	const handleUpdateCheckbox = (id, titleFromTodo, completedFromTodo) => {
		const data = {
			title: titleFromTodo,
			completed: !completedFromTodo,
			id: id,
		};
		dispatch(updateTodoCheckbox(data));
	};

	return (
		<div className="col-12 col-xl-10">
			<Header
				titleAdd={titleAdd}
				handleChange={handleChange}
				handlePost={handlePost}
			/>
			<div className="alert alert-success">
				{todosRedux.map(todo => (
					<ToDoListItem
						todo={todo}
						key={todo.id}
						title={title}
						handleRemove={handleRemove}
						handleChange={handleChange}
						handleCurrentTitle={handleCurrentTitle}
						handleUpdateCheckbox={handleUpdateCheckbox}
					/>
				))}
			</div>
		</div>
	);
};

export default ToDoList;
