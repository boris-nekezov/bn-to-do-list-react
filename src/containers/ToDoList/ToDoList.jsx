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
    // instance.get("/data.json").then((response) => {
    //   // put the data into array
    //   const fetchedData = [];
    //   for (let key in response.data) {
    //     fetchedData.push({...response.data[key], id: key})
    //   }
    //   // set the state of todos to be fetchedData
    //   this.setState({
    //     results: fetchedData
    //   })
    // })
  }

  handlePost = event => {
    event.preventDefault();
    // add the data we want to post
    const Data = {
      title: this.state.title,
      complete: this.state.completed
    };

    // push this data to the back-end (post($endpoint) is available in axios)
    instance.post('todos.json', Data).then((response) => {
      console.log(response);
      const todos = [
        ...this.state.todos,
        { ...Data, id: response.data.title }
      ];
      this.setState({
        title: "",
        todos: todos
      })
      console.log('successfull post request!')

      //  TUK SUM TODO MAKE PROJECT IN FIREBASE!
    });
  }

  render() {
    const { handlePost } = this.state;
    return (
      <div>
        <Header handlePost={handlePost} />
        <ToDoListItems />
      </div>
    );
  }
}

export default ToDoList;
