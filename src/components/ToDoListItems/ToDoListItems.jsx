import React, { Component } from 'react'
import ToDoListItem from './ToDoListItem/ToDoListItem'

export default class ToDoListItems extends Component {
  render() {
    return (
      <div className="alert alert-success">
        <h1>ToDoListItems</h1>
        <ToDoListItem />
      </div>
    )
  }
}
