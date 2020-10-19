import axios from "axios";

export default axios.create({
  // this is the vue version
  // baseUrl: "https://bn-to-do-list.firebaseio.com/"

  // this the version from react course
  // baseUrl: "https://todo-list-react-5378f.firebaseio.com/"

  // this project is created specially for this
  baseUrl: "https://bn-to-do-list-b3c7c.firebaseio.com/"
});