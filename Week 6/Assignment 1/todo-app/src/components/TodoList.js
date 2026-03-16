// src/components/TodoList.js
import React from 'react';

function TodoList({ todos, onDone }) {
  return (
    <div>
      <h2>My todo list:</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.task}</strong>: {todo.description}{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); onDone(todo.id); }}>
              Done
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;