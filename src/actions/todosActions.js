import {
	FETCH_TODOS,
	ADD_TODO,
	REMOVE_TODO,
	UPDATE_TODO_TITLE,
	UPDATE_TODO_CHECKBOX,
} from './types';
import instance from '../firebase/instance';
import { trackPromise } from 'react-promise-tracker';

export const fetchTodos = () => dispatch => {
	trackPromise(
		instance.get('/todos.json').then(response => {
			// put the data into array
			const fetchedData = [];
			for (let key in response.data) {
				fetchedData.push({ ...response.data[key], id: key });
			}
			// set the state of todos to be fetchedData
			// setTodos(fetchedData);
			dispatch({
				type: FETCH_TODOS,
				payload: fetchedData,
			});
		})
	);
};

export const addTodo = data => dispatch => {
	trackPromise(
		// push this data to the back-end (post($endpoint) is available in axios)
		instance.post('/todos.json', data).then(response => {
			// response.data.name => -MK3VSi5XrApFPQ6oh1C => the key given from firebase
			dispatch({
				type: ADD_TODO,
				payload: { ...data, id: response.data.name },
			});
		})
	);
};

export const removeTodo = id => dispatch => {
	trackPromise(
		// here we delete only the item in the db in firebase
		instance.delete(`/todos/${id}.json`).then(response => {
			dispatch({
				type: REMOVE_TODO,
				payload: id,
			});
		})
	);
};

export const updateTodoTitle = data => dispatch => {
	trackPromise(
		instance.put(`todos/${data.id}.json`, data).then(response => {
			// update the title text in content after the change
			instance.get('todos.json').then(response => {
				const fetchedData = [];
				for (let key in response.data) {
					fetchedData.push({ ...response.data[key], id: key });
				}
				dispatch({
					type: UPDATE_TODO_TITLE,
					payload: fetchedData,
				});
			});
		})
	);
};

export const updateTodoCheckbox = data => dispatch => {
	// first we get the completed status from the todo with that id
	instance.get(`todos/${data.id}.json`).then(response => {
		trackPromise(
			instance.put(`todos/${data.id}.json`, data).then(response => {
				instance.get('todos.json').then(response => {
					const fetchedData = [];
					for (let key in response.data) {
						fetchedData.push({ ...response.data[key], id: key });
					}
					dispatch({
						type: UPDATE_TODO_CHECKBOX,
						payload: fetchedData,
					});
				});
			})
		);
	});
};
