import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleFormSubmit = (event) => {
    // Prevent default form submission behavior
    event.preventDefault();
    if (taskText.trim()) {
      // Add new task
      onAddTask(taskText);
      // Clear input field after submission
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="task-form">
      <input
        type="text"
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
        className="task-input"
        placeholder="Enter your task"
      />
      <button type="submit" className="task-button">Add</button>
    </form>
  );
};

export default TaskForm;
