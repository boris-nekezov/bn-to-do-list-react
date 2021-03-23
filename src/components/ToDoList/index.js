import React, { useState, useEffect } from 'react';
import Header from '../Header';
import ToDoListItem from '../ToDoListItem/ToDoListItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo } from '../../actions/todosActions';

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
					/>
				))}
			</div>
		</div>
	);
};

export default ToDoList;
