import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import ToDoListItems from '../../components/ToDoListItems/ToDoListItems';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchTodos,
	addTodo,
	removeTodo,
	updateTodoTitle,
	updateTodoCheckbox,
} from '../../actions/todosActions';

const ToDoList = props => {
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

	const handleUpdateTitle = (id, title) => {
		const data = {
			title: title,
			id: id,
		};
		dispatch(updateTodoTitle(data));
		// reset local state title and status
		setTitle('');
		setCompleted(false);
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
			<ToDoListItems
				todos={todosRedux}
				title={title}
				handleRemove={handleRemove}
				handleUpdateTitle={handleUpdateTitle}
				handleChange={handleChange}
				handleCurrentTitle={handleCurrentTitle}
				handleUpdateCheckbox={handleUpdateCheckbox}
			/>
		</div>
	);
};

export default ToDoList;
