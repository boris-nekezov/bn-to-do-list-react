import React, { Component } from 'react'
import Button from '../../../UI/Button/Button'
import Input from '../../../UI/Input/Input'
import Icon from '../../../UI/Icon/Icon'

export default class ToDoListItemTitle extends Component {
  render() {
    const { 
      id, 
      title,
      handleUpdateTitle,
      handleChange,
      label,
      handleEditMode,
      isInEditMode,
      handleCurrentTitle,
      handleRemove
    } = this.props;
    return (
      <div className="col-10 col-lg-9 align-items-center">
          <div className="container">

            <div className="row">
              <div className="col">
                {isInEditMode ?
                  <div className="mb-2">
                    <Input 
                      type="text"
                      id={`in${id}`}
                      value={title}
                      handleChange={handleChange}
                      name="title"
                      />
                  </div>
                  :
                  <label 
                    htmlFor={`in${id}`} 
                    className="input-label"
                    onClick={() => {handleCurrentTitle(label); handleEditMode()} }
                  >{label}</label>
                }
              </div>
            </div>

            {isInEditMode &&
              <div className="row">
                <div className="col mb-2">
                  <div 
                    role="group" 
                    aria-label="Basic example" 
                    className="btn-group btn-group-sm d-lg-none">                  
                      <Button
                        clicked={() => { handleUpdateTitle(id, title); handleEditMode(); }}
                        modifiers="success"
                      >
                        Save
                      </Button>
                      <Button
                        clicked={() => handleEditMode()}
                        modifiers="warning" 
                      >
                        Cancel
                      </Button>
                      <Button 
                        modifiers="danger d-lg-none" 
                        clicked={() => handleRemove(id)}
                      >
                        <Icon iconName="trash-o" />
                      </Button>
                  </div>
                  <div 
                    role="group" 
                    aria-label="Basic example" 
                    className="btn-group btn-group-lg d-none d-lg-block">                  
                      <Button
                        clicked={() => { handleUpdateTitle(id, title); handleEditMode(); }}
                        modifiers="success"
                      >
                        Save
                      </Button>
                      <Button
                        clicked={() => handleEditMode()}
                        modifiers="warning" 
                      >
                        Cancel
                      </Button>
                      <Button 
                        modifiers="danger d-lg-none" 
                        clicked={() => handleRemove(id)}
                      >
                        <Icon iconName="trash-o" modifiers="mr-2" />
                      </Button>
                  </div>
                </div>
              </div>
            }      
          </div>
        </div>
    );
  };
}
