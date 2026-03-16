// src/components/TodoApp.js
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const handleAdd = ({ task, description }) => {
    const newTodo = {
      id: Date.now(),   // simple unique ID
      task,
      description,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDone = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <TodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onDone={handleDone} />
    </div>
  );
}

export default TodoApp;