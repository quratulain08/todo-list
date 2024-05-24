import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import { v4 as uuidv4 } from 'uuid';
import TaskItem from './TaskItem';
import UpdateTaskForm from './UpdateTaskForm';

uuidv4();

const TaskWrapperLocalStorage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const addTask = task => {
    const newTasks = [...tasks, { id: uuidv4(), text: task, isDone: false, isEditing: false }];
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const markComplete = id => {
    const newTasks = tasks.map(task => task.id === id ? { ...task, isDone: !task.isDone } : task);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const removeTask = id => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const modifyTask = id => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isEditing: !task.isEditing } : task));
  };

  const updateTask = (text, id) => {
    const newTasks = tasks.map(task => task.id === id ? { ...task, text, isEditing: !task.isEditing } : task);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  return (
    <div className="task-wrapper">
      <h1>Get Things Done!</h1>
      <TaskForm onAddTask={addTask} />
      {tasks.map((task, index) => (
        task.isEditing ? (
          <UpdateTaskForm key={task.id} updateTask={updateTask} currentTask={task} />
        ) : (
          <TaskItem key={task.id} item={task} markComplete={markComplete} removeTask={removeTask} modifyTask={modifyTask} />
        )
      ))}
    </div>
  );
};

export default TaskWrapperLocalStorage;
