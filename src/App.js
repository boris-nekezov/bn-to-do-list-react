import React from 'react';
import './App.css';
import ToDoList from './containers/ToDoList/ToDoList';

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <ToDoList />
        {/* spinner will come from libraries */}
      </div> 
    </div>
  );
}

export default App;
