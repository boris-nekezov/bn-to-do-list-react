import React from 'react';
import HeaderTaskAdd from './HeaderTaskAdd';

const Header = ({ titleAdd, handleChange, handlePost }) => {
	return (
		<div>
			<div className="alert alert-success my-2">
				<h1 className="text-center">BN To Do List</h1>
			</div>
			<HeaderTaskAdd
				titleAdd={titleAdd}
				handleChange={handleChange}
				handlePost={handlePost}
			/>
		</div>
	);
};

export default Header;
