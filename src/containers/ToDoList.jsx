import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import ToDoListItem from '../components/ToDoListItem/ToDoListItem';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchTodos,
	addTodo,
	updateTodoCheckbox,
} from '../actions/todosActions';

const ToDoList = () => {
	// local state
	const [titleAdd, setTitleAdd] = useState('');
	const [title, setTitle] = useState('');

	const dispatch = useDispatch();
	const todosRedux = useSelector(state => state.todosState.todos);

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
		dispatch(
			addTodo({
				title: titleAdd,
				completed: false,
			})
		);
		// reset the value of add text field
		setTitleAdd('');
	};

	const handleUpdateCheckbox = (id, titleFromTodo, completedFromTodo) => {
		dispatch(
			updateTodoCheckbox({
				title: titleFromTodo,
				completed: !completedFromTodo,
				id: id,
			})
		);
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
