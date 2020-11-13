import {
	FETCH_TODOS,
	ADD_TODO,
	REMOVE_TODO,
	UPDATE_TODO_TITLE,
	UPDATE_TODO_CHECKBOX,
} from '../actions/types';

const initialState = {
	todos: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TODOS:
			return {
				...state,
				todos: action.payload,
			};
		case ADD_TODO:
			// action.payload => { ...data, id: response.data.name }
			return {
				...state,
				todos: [...state.todos, action.payload],
			};
		case REMOVE_TODO:
			// action.payload => id
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload),
			};
		case UPDATE_TODO_TITLE:
			// action.payload => fetchedData
			return {
				...state,
				todos: action.payload,
			};
		case UPDATE_TODO_CHECKBOX:
			// action.payload => fetchedData
			return {
				...state,
				todos: action.payload,
			};
		default:
			return state;
	}
};
