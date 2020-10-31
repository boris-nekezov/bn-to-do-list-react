import axios from 'axios';

export default axios.create({
	// this project is created specially for this
	baseURL: 'https://bn-to-do-list-b3c7c.firebaseio.com/',
});
