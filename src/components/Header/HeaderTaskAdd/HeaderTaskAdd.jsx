import React, { Component } from 'react'
import Button from '../../UI/Button/Button'
import Icon from '../../UI/Icon/Icon'
import Input from '../../UI/Input/Input'

export default class HeaderTaskAdd extends Component {
  render() {
    const { title, titleAdd, handleChange, handlePost } = this.props;
    return (
      <form autoComplete="off" onSubmit={handlePost}>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <Button modifiers="success" type="submit">
              <Icon iconName="plus" modifiers="mr-2"/>
              Add new task
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
