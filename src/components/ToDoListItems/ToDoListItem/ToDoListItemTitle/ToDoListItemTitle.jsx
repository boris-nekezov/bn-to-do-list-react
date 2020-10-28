import React, { Component } from 'react'
import Input from '../../../UI/Input/Input'
import ToDoListItemEditMode from './ToDoListItemEditMode/ToDoListItemEditMode';

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
              <ToDoListItemEditMode 
                handleUpdateTitle={handleUpdateTitle}
                id={id}
                title={title}
                handleEditMode={handleEditMode}
                handleRemove={handleRemove}
              />
            }      
          </div>
        </div>
    );
  };
}
