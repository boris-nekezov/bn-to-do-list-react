import React, { Component } from 'react'
import Button from '../../UI/Button/Button'
import Checkbox from '../../UI/Checkbox/Checkbox'
import Icon from '../../UI/Icon/Icon'
// import Input from '../../UI/Input/Input'
import ToDoListItemTitle from './ToDoListItemTitle/ToDoListItemTitle'

export default class ToDoListItem extends Component {
  state = {
    isInEditMode: false
  }

  handleEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    });
  }


  render() {
    const { 
      todo, 
      handleRemove, 
      handleUpdateTitle, 
      handleChange,
      title,
      handleCurrentTitle,
      handleUpdateCheckbox
    } = this.props;
    // console.log('todo', todo);
    const isInEditMode = this.state.isInEditMode;
    return (
      <div className="jumbotron mb-2 py-3 px-3">
        <div className="row">
          <div className="col-2 col-lg-1 align-items-center">
            <Checkbox 
              id={todo.id}
              title={todo.title}
              completed={todo.completed} 
              handleUpdateCheckbox={handleUpdateCheckbox}
            />
          </div>
          
          <ToDoListItemTitle 
            id={todo.id}
            title={title}
            label={todo.title}
            handleUpdateTitle={handleUpdateTitle}
            handleChange={handleChange}
            handleEditMode={this.handleEditMode}
            isInEditMode={isInEditMode}
            handleCurrentTitle={handleCurrentTitle}
            handleRemove={handleRemove}
          />

          <div className="col-12 col-lg-2 align-items-center">
            {isInEditMode ?
              <Button 
                modifiers="danger d-none d-lg-block" 
                clicked={() => handleRemove(todo.id)}
              >
                <Icon iconName="trash-o" modifiers="mr-2" />
                Delete
              </Button>
              :
              <div style={{width: "100%"}}>
                <Button 
                  modifiers="warning btn-block btn-sm d-lg-none" 
                  clicked={() => {handleCurrentTitle(todo.title); this.handleEditMode()} }
                >
                  <Icon iconName="pencil" modifiers="mr-2" />
                  Edit
                </Button>
                <Button 
                  modifiers="warning btn-block d-none d-lg-block" 
                  clicked={() => {handleCurrentTitle(todo.title); this.handleEditMode()} }
                >
                  <Icon iconName="pencil" modifiers="mr-2" />
                  Edit
                </Button>
              </div>
      
            }
          
       
          </div>
        </div>
      </div>
    )
  }
}
