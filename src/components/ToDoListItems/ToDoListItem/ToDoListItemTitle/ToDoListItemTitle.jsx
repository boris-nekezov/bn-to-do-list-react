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
                        kind="success"
                        onClick={() => { handleUpdateTitle(id, title); handleEditMode(); }}
                      >
                        Save
                      </Button>
                      <Button
                        kind="warning" 
                        onClick={() => handleEditMode()}
                      >
                        Cancel
                      </Button>
                      <Button 
                        kind="danger d-lg-none" 
                        onClick={() => handleRemove(id)}
                      >
                        <Icon iconName="trash-o" />
                      </Button>
                  </div>
                  <div 
                    role="group" 
                    aria-label="Basic example" 
                    className="btn-group btn-group-lg d-none d-lg-block">                  
                      <Button
                        kind="success"
                        onClick={() => { handleUpdateTitle(id, title); handleEditMode(); }}
                      >
                        Save
                      </Button>
                      <Button
                        kind="warning" 
                        onClick={() => handleEditMode()}
                      >
                        Cancel
                      </Button>
                      <Button 
                        kind="danger d-lg-none" 
                        onClick={() => handleRemove(id)}
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
