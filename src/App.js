import React from 'react';
import './App.css';
import ToDoList from './containers/ToDoList';
import Loading from './components/UI/Loading/Loading';

function App() {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<ToDoList />
				<Loading />
			</div>
		</div>
	);
}

export default App;
