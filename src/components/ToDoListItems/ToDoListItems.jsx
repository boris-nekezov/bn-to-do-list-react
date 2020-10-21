import React, { Component } from 'react'
import ToDoListItem from './ToDoListItem/ToDoListItem'

export default class ToDoListItems extends Component {
  render() {
    const {
      todos,
      handleRemove,
      handleUpdateTitle,
      handleChange,
      title,
      handleCurrentTitle
    } = this.props;
    // console.log('todos', todos);
    return (
      <div className="alert alert-success">
        {todos.map((todo) => 
          <ToDoListItem 
            todo={todo}
            key={todo.id} 
            title={title}
            handleRemove={handleRemove}
            handleUpdateTitle={handleUpdateTitle} 
            handleChange={handleChange}
            handleCurrentTitle={handleCurrentTitle}
          />
        )}

      </div>
    )
  }
}
