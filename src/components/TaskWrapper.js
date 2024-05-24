import React, { useState } from "react";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";
import { v4 as uuidv4 } from "uuid";
import UpdateTaskForm from "./UpdateTodoForm";

const TaskWrapper = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([
      ...tasks,
      { id: uuidv4(), text: task, isDone: false, isEditing: false },
    ]);
  };

  const removeTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const markComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const modifyTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  const updateTask = (text, id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text, isEditing: !task.isEditing } : task
      )
    );
  };

  return (
    <div className="task-wrapper">
      <h1>Get Things Done!</h1>
      <TaskForm onAddTask={addTask} />
      {/* Display tasks */}
      {tasks.map((task) =>
        task.isEditing ? (
          <UpdateTaskForm key={task.id} updateTask={updateTask} currentTask={task} />
        ) : (
          <TaskItem
            key={task.id}
            item={task}
            removeTask={removeTask}
            modifyTask={modifyTask}
            markComplete={markComplete}
          />
        )
      )}
    </div>
  );
};

export default TaskWrapper;
