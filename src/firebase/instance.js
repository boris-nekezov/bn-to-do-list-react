import axios from "axios";

export default axios.create({
  baseUrl: "https://bn-to-do-list.firebaseio.com/"
});