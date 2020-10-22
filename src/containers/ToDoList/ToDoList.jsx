import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import ToDoListItems from '../../components/ToDoListItems/ToDoListItems';
import instance from '../../firebase/instance';

class ToDoList extends Component {
  state = {
    titleAdd: "",
    title: "",
    completed: false,
    todos: []
  }

  componentDidMount() {
    instance.get("/todos.json").then((response) => {
      // console.log('response', response);
      // put the data into array
      const fetchedData = [];
      for (let key in response.data) {
        fetchedData.push({...response.data[key], id: key})
      }
      // set the state of todos to be fetchedData
      this.setState({
        todos: fetchedData
      })
    })
  }

  handleChange = event => {
    // console.log(`[handleChange]`);
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  }

  // set current title of a task in the input value of the task
  handleCurrentTitle = titleCurrent => {
    this.setState({
      title: titleCurrent
    })
  }

  handlePost = event => {
    // console.log(`[handlePost]`);
    event.preventDefault();
    // add the data we want to post
    const Data = {
      title: this.state.titleAdd,
      completed: this.state.completed
    };

    // push this data to the back-end (post($endpoint) is available in axios)
    instance.post("/todos.json", Data).then((response) => {
      // console.log('response', response);
      // response.data.name => -MK3VSi5XrApFPQ6oh1C => the key given from firebase
      const todos = [
        ...this.state.todos,
        { ...Data, id: response.data.name }
      ];
      this.setState({
        titleAdd: "",
        todos: todos
      })
      // console.log('successfull post request!')
    });
  }

  handleRemove = id => {
    // console.log('delete', id);
    // here we delete only the item in the db in firebase
    instance.delete(`/todos/${id}.json`).then((response) => {
      // console.log('response', response);
    });
    // now we have to delete it from the state as well
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  handleUpdateTitle = id => {
    console.log(`before ${this.state.title}`)
    const Data = {
      title: this.state.title,
      completed: this.state.completed
    };
    instance.put(`todos/${id}.json`, Data).then((response) => {
      console.log('response', response);
      // update the title text in content after the change
      instance.get('todos.json').then((response) => {
        const fetchedData = [];
        for (let key in response.data) {
          fetchedData.push({...response.data[key], id: key})
        }
        this.setState({
          todos: fetchedData,
          title: '',
          completed: false
        })
      });
   
    });
    console.log(`after ${this.state.title}`)
  }

  handleUpdateCheckbox = (id, titleFromTodo, completedFromTodo) => {
    const Data = {
      title: titleFromTodo,
      completed: !completedFromTodo
    }
    instance.put(`todos/${id}.json`, Data).then((response) => {
      console.log('response', response);
    })
  }

  render() {
    const { 
      titleAdd, 
      title, 
      todos 
    } = this.state;
    return (
      <div className="col-10">
        <Header 
          title={title}
          titleAdd={titleAdd}
          handleChange={this.handleChange} 
          handlePost={this.handlePost} />
        <ToDoListItems 
          todos={todos} 
          title={title}
          handleRemove={this.handleRemove}
          handleUpdateTitle={this.handleUpdateTitle} 
          handleChange={this.handleChange} 
          handleCurrentTitle={this.handleCurrentTitle}
          handleUpdateCheckbox={this.handleUpdateCheckbox}
        />
      </div>
    );
  }
}

export default ToDoList;
