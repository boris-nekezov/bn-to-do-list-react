import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import ToDoListItems from '../../components/ToDoListItems/ToDoListItems';

class ToDoList extends Component {
  render() {
    return (
      <div>
        <Header />
        <ToDoListItems />
      </div>
    );
  }
}

export default ToDoList;
