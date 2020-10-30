import React, { Component } from 'react'
import Button from '../../UI/Button/Button'
import Icon from '../../UI/Icon/Icon'
import Input from '../../UI/Input/Input'

export default class HeaderTaskAdd extends Component {
  render() {
    const { titleAdd, handleChange, handlePost } = this.props;
    return (
      <form autoComplete="off" onSubmit={handlePost}>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <Button kind="success" type="submit">
              <Icon iconName="plus" modifiers="mr-sm-2"/>
              <span className="d-none d-sm-inline">Add new task</span>
            </Button>
          </div>
          <Input 
            type="text" 
            placeholder="Please enter task title!"
            value={titleAdd} 
            handleChange={handleChange}
            name="titleAdd"
            autofocus
          />  
        </div>
      </form>
    );
  };
}
