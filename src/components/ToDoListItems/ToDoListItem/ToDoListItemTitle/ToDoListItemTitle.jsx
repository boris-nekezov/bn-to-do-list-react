import React, { Component } from 'react'
import Button from '../../../UI/Button/Button'
import Input from '../../../UI/Input/Input'

export default class ToDoListItemTitle extends Component {
  render() {
    const { id, title } = this.props;
    return (
      <div className="col-9 align-items-center">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label htmlFor={`in${id}`}>{title}</label>
                  <Input id={`in${id}`} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div 
                  role="group" 
                  aria-label="Basic example" 
                  className="btn-group btn-group-lg">                  
                    <Button modifiers="success">Save</Button>
                    <Button modifiers="warning">Cancel</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  };
}
