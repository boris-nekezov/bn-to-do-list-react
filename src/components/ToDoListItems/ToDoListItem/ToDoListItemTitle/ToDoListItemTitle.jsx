import React, { Component } from 'react'
import Button from '../../../UI/Button/Button'
import Input from '../../../UI/Input/Input'

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
      handleCurrentTitle
    } = this.props;
    return (
      <div className="col-9 align-items-center">
          <div className="container">

            <div className="row">
              <div className="col">
                <div className="form-group">
                  {isInEditMode ?
                    <Input 
                      type="text"
                      id={`in${id}`}
                      value={title}
                      handleChange={handleChange}
                      name="title"
                    />
                    :
                    <label 
                      htmlFor={`in${id}`} 
                      className="input-label"
                      onClick={() => {handleCurrentTitle(label); handleEditMode()} }
                    >{label}</label>
                  }
                </div>
              </div>
            </div>

            {isInEditMode &&
              <div className="row">
                <div className="col">
                  <div 
                    role="group" 
                    aria-label="Basic example" 
                    className="btn-group btn-group-lg">                  
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
                  </div>
                </div>
              </div>
            }      
          </div>
        </div>
    );
  };
}
