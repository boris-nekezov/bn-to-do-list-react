import { combineReducers } from 'redux';
import todosReducer from './todosReducer';

const rootReducer = combineReducers({
	todosState: todosReducer,
});

export default rootReducer;
