import React, { Component } from 'react'
import Button from '../../UI/Button/Button'
import Icon from '../../UI/Icon/Icon'
import Input from '../../UI/Input/Input'

export default class HeaderTaskAdd extends Component {
  render() {
    return (
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <Button modifiers="success">
            <Icon iconName="plus" modifiers="mr-2"/>
            Add new task
          </Button>
        </div>
        <Input 
          type="text" 
          placeholder="Please enter task title!" 
        />
      </div>
    );
  };
}
