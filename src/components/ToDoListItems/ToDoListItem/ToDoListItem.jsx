import React, { Component } from 'react'
import Button from '../../UI/Button/Button'
import Checkbox from '../../UI/Checkbox/Checkbox'
import Icon from '../../UI/Icon/Icon'
// import Input from '../../UI/Input/Input'
import ToDoListItemTitle from './ToDoListItemTitle/ToDoListItemTitle'

export default class ToDoListItem extends Component {
  render() {
    const { todo, handleRemove } = this.props;
    // console.log('todo', todo);
    return (
      <div className="jumbotron mb-2 py-3 px-3">
        <div className="row">
          <div className="col-1 align-items-center">
            <Checkbox 
              id={todo.id}
              completed={todo.completed} />
          </div>
          
          <ToDoListItemTitle 
            id={todo.id}
            title={todo.title}
          />

          <div className="col-2 align-items-center">
            <Button modifiers="warning">
              <Icon iconName="pencil" modifiers="mr-2" />
              Edit
            </Button>
            <Button modifiers="danger" clicked={() => handleRemove(todo.id)}>
              <Icon iconName="trash-o" modifiers="mr-2" />
              Delete
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
