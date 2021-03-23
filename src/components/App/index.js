import React from 'react';
import './index.css';
import ToDoList from '../ToDoList';
import Loading from '../UI/Loading/Loading';

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
