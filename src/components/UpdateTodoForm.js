import React, { useState } from 'react';

const UpdateTodoForm = ({ updateTask, currentTask }) => {
    const [inputValue, setInputValue] = useState(currentTask.task);

    const handleFormSubmit = (event) => {
        // Prevent default form submission behavior
        event.preventDefault();
        // Call the function to update the task
        updateTask(inputValue, currentTask.id);
    };

    return (
        <form onSubmit={handleFormSubmit} className="update-todo-form">
            <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                className="update-input"
                placeholder="Modify task"
            />
            <button type="submit" className="update-button">Update Task</button>
        </form>
    );
};

export default UpdateTodoForm;
