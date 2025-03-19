import React, { useState, useEffect } from 'react';
import TaskCreation from "./Components/TaskCreation";
import TaskManagement from "./Components/TaskManagement";
import './App.css';
import TaskFiltering from './Components/TaskFiltring';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => setTasks([...tasks, newTask]);

  const toggleComplete = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  let filteredTasks;

  if (filter === "completed") {
    filteredTasks = tasks.filter(task => task.completed);
  } else if (filter === "pending") {
    filteredTasks = tasks.filter(task => !task.completed);
  } else {
    filteredTasks = tasks;
  }

  return (
    <div className="app-container">
      <h1>Task Management App</h1>
      <TaskCreation addTask={addTask} />
      <TaskManagement tasks={filteredTasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
      <TaskFiltering setFilter={setFilter} />
    </div>
  );
}

export default App;