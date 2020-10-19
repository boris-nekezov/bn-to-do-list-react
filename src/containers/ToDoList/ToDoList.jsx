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
    console.log(`[componentDidMount]`);
    // console.log(`instance`);
    // console.log(instance);
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

  handleChange = event => {
    console.log(`[handleChange]`);
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  }

  handlePost = event => {
    console.log(`[handlePost]`);
    event.preventDefault();
    // add the data we want to post
    const Data = {
      title: this.state.title,
      complete: this.state.completed
    };

    // push this data to the back-end (post($endpoint) is available in axios)
    instance.post("/data.json", Data).then((response) => {
      console.log(response);
      // const todos = [
      //   ...this.state.todos,
      //   { ...Data, id: response.data.title }
      // ];
      // this.setState({
      //   title: "",
      //   todos: todos
      // })
      // console.log('successfull post request!')

    });
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <Header 
          title={title}
          handleChange={this.handleChange} 
          handlePost={this.handlePost} />
        <ToDoListItems />
      </div>
    );
  }
}

export default ToDoList;
