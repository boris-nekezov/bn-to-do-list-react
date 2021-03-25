import React from 'react';
import Loader from 'react-loader-spinner';
import { usePromiseTracker } from 'react-promise-tracker';
import './style.css';

const Loading = () => {
	const { promiseInProgress } = usePromiseTracker();
	return (
		// promiseInProgress is false by default but if promise is in progress
		// it will be se to true during the process and it will show the spinner
		promiseInProgress && (
			<div className="loader">
				<Loader type="Audio" color="#f89406" height="150" width="150" />
			</div>
		)
	);
};

export default Loading;
