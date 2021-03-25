import React from 'react';
import Button from '../Button';
import Icon from '../Icon';
import Input from '../UI/Input';

const HeaderTaskAdd = ({ titleAdd, handleChange, handlePost }) => {
	return (
		<form autoComplete="off" onSubmit={handlePost}>
			<div className="input-group mb-2">
				<div className="input-group-prepend">
					<Button kind="success" type="submit">
						<Icon iconName="plus" modifiers="mr-sm-2" />
						<span className="d-none d-sm-inline">Add new task</span>
					</Button>
				</div>
				<Input
					type="text"
					placeholder="Please enter task title!"
					value={titleAdd}
					name="titleAdd"
					autoFocus
					onChange={handleChange}
				/>
			</div>
		</form>
	);
};

export default HeaderTaskAdd;
