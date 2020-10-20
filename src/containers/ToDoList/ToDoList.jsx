import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import ToDoListItems from '../../components/ToDoListItems/ToDoListItems';
import instance from '../../firebase/instance';

class ToDoList extends Component {
  state = {
    title: "",
    completed: false,
    todos: []
  }

  componentDidMount() {
    // console.log(`[componentDidMount]`);
    instance.get("/todos.json").then((response) => {
      // console.log(`response`);
      // console.log(response);
      // put the data into array
      const fetchedData = [];
      for (let key in response.data) {
        // console.log('key', key);
        // console.log('...response.data[key]', {...response.data[key]});
        // console.log(`===SEPARATOR==============================`);
        fetchedData.push({...response.data[key], id: key})
      }
      // console.log('fetchedData', fetchedData);
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

  handlePost = event => {
    // console.log(`[handlePost]`);
    event.preventDefault();
    // add the data we want to post
    const Data = {
      title: this.state.title,
      completed: this.state.completed
    };

    // push this data to the back-end (post($endpoint) is available in axios)
    instance.post("/todos.json", Data).then((response) => {
      // console.log(response);
      // response.data.name => -MK3VSi5XrApFPQ6oh1C => the key given from firebase
      const todos = [
        ...this.state.todos,
        { ...Data, id: response.data.name }
      ];
      this.setState({
        title: "",
        todos: todos
      })
      // console.log(this.state.todos);
      // console.log('successfull post request!')
    });
  }

  render() {
    const { title, todos } = this.state;
    return (
      <div>
        <Header 
          title={title}
          handleChange={this.handleChange} 
          handlePost={this.handlePost} />
        <ToDoListItems 
          todos={todos} />
      </div>
    );
  }
}

export default ToDoList;
