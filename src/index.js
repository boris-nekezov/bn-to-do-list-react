import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);

// axios
// https://github.com/axios/axios

// font-awesome inlcuded in index.html
// https://fontawesome.com/v4.7.0/icons/

// theme reference
// https://bootswatch.com/slate/

// spinner
// https://github.com/mhnpd/react-loader-spinner

// promise tracker
// https://github.com/Lemoncode/react-promise-tracker

// redux
// https://github.com/reduxjs/redux

// react-redux
// https://react-redux.js.org/introduction/quick-start

// redux-thunk
// https://github.com/reduxjs/redux-thunk
