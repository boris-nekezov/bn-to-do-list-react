import React from 'react';
import Input from '../UI/Input';
import ToDoListItemTitleEditMode from './ToDoListItemTitleEditMode';

const ToDoListItemTitle = ({
	id,
	title,
	handleUpdateTitle,
	handleChange,
	label,
	handleEditMode,
	isInEditMode,
	handleCurrentTitle,
	handleRemove,
}) => {
	return (
		<div className="col-10 col-lg-9 align-items-center">
			<div className="container">
				<div className="row">
					<div className="col">
						{isInEditMode ? (
							<div className="mb-2">
								<Input
									type="text"
									id={`in${id}`}
									value={title}
									name="title"
									onChange={handleChange}
								/>
							</div>
						) : (
							<label
								htmlFor={`in${id}`}
								className="input-label"
								onClick={() => {
									handleCurrentTitle(label);
									handleEditMode();
								}}
							>
								{label}
							</label>
						)}
					</div>
				</div>

				{isInEditMode && (
					<ToDoListItemTitleEditMode
						handleUpdateTitle={handleUpdateTitle}
						id={id}
						title={title}
						handleEditMode={handleEditMode}
						handleRemove={handleRemove}
					/>
				)}
			</div>
		</div>
	);
};

export default ToDoListItemTitle;
