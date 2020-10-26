import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import ToDoListItems from '../../components/ToDoListItems/ToDoListItems';
import instance from '../../firebase/instance';
import { trackPromise } from 'react-promise-tracker';

const ToDoList = () => {
  const [titleAdd, setTitleAdd] = useState("");
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log('useEffect')
    trackPromise(
      instance.get("/todos.json").then((response) => {
        console.log('response', response);
        // put the data into array
        const fetchedData = [];
        for (let key in response.data) {
          fetchedData.push({...response.data[key], id: key})
        }
        // set the state of todos to be fetchedData
        setTodos(fetchedData);
      })
    );
  }, []);

  const handleChange = event => {
    console.log(`[handleChange]`);
    const { value, name } = event.currentTarget;
    if (name === "titleAdd") {
      setTitleAdd(value);
    }
    if (name === "title") {
      setTitle(value);
    }
  }

  const handleCurrentTitle = titleCurrent => {
    console.log(`[handleCurrentTitle]`);
    setTitle(titleCurrent);
  };

  const handlePost = event => {
    console.log(`[handlePost]`);
    event.preventDefault();
    // add the data we want to post
    const Data = {
      title: titleAdd,
      completed: completed
    };

    trackPromise(
      // push this data to the back-end (post($endpoint) is available in axios)
      instance.post("/todos.json", Data).then((response) => {
        console.log('response', response);
        // response.data.name => -MK3VSi5XrApFPQ6oh1C => the key given from firebase
        const todosNew = [
          ...todos,
          { ...Data, id: response.data.name }
        ];
        setTitle("");
        setTodos(todosNew);
      })
    );
  }

  const handleRemove = id => {
    console.log(`[handleRemove]`)
    console.log('delete', id);
    trackPromise(
      // here we delete only the item in the db in firebase
      instance.delete(`/todos/${id}.json`).then((response) => {
        console.log('response', response);
      })
    );
    // now we have to delete it from the state as well
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const handleUpdateTitle = id => {
    console.log(`[handleUpdateTitle]`)
    const Data = {
      title: title,
      completed: completed
    };

    trackPromise(
      instance.put(`todos/${id}.json`, Data).then((response) => {
        console.log('response', response);
        // update the title text in content after the change
        instance.get('todos.json').then((response) => {
          const fetchedData = [];
          for (let key in response.data) {
            fetchedData.push({...response.data[key], id: key})
          }
          setTodos(fetchedData);
          setTitle('');
          setCompleted(false);
        });
      })
    );
  }

  const handleUpdateCheckbox = (id, titleFromTodo, completedFromTodo) => {
    console.log(`[handleUpdateCheckbox]`);
    const Data = {
      title: titleFromTodo,
      completed: !completedFromTodo
    };
    trackPromise(
      instance.put(`todos/${id}.json`, Data).then((response) => {
        console.log('response', response);
      })
    );
  }

  return (
    <div className="col-12 col-xl-10">
      <Header 
        titleAdd={titleAdd}
        handleChange={handleChange} 
        handlePost={handlePost} />
      <ToDoListItems 
        todos={todos} 
        title={title}
        handleRemove={handleRemove}
        handleUpdateTitle={handleUpdateTitle} 
        handleChange={handleChange} 
        handleCurrentTitle={handleCurrentTitle}
        handleUpdateCheckbox={handleUpdateCheckbox}
      />
    </div>
  );
}

export default ToDoList;
