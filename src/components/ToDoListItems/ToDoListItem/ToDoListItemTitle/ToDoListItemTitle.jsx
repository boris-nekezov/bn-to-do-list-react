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
                      <input 
                        type="text"
                        id={`in${id}`}
                        value={title}
                        onChange={handleChange}
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
                      <button 
                        onClick={() => { handleUpdateTitle(id, title); handleEditMode(); }}
                        modifiers="success">Save</button>
                      <button modifiers="warning" onClick={() => handleEditMode()}>Cancel</button>
                  </div>
                </div>
              </div>
            }      
          </div>
        </div>
    );
  };
}
