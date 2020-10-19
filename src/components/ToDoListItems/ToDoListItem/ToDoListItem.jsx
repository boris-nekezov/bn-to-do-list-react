import React, { Component } from 'react'
import Button from '../../UI/Button/Button'
import Checkbox from '../../UI/Checkbox/Checkbox'
import Icon from '../../UI/Icon/Icon'
// import Input from '../../UI/Input/Input'
import ToDoListItemTitle from './ToDoListItemTitle/ToDoListItemTitle'

export default class ToDoListItem extends Component {
  render() {
    return (
      <div className="jumbotron mb-2 py-3 px-3">
        <div className="row">
          <h1>ToDoListItem</h1>

          <div className="col-1 align-items-center">
            <Checkbox />
            
          </div>
          
          <ToDoListItemTitle />

          <div className="col-2 align-items-center">
            <Button modifiers="warning">
              <Icon iconName="pencil" modifiers="mr-2" />
              Edit
            </Button>
            <Button modifiers="danger">
              <Icon iconName="trash-o" modifiers="mr-2" />
              Delete
            </Button>
          </div>
       
        </div>
  
      </div>
    )
  }
}
