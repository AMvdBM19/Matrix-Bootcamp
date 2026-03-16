// src/components/TodoForm.js
import React, { useState } from 'react';

function TodoForm({ onAdd }) {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) {
      alert('Task input is required!');
      return;
    }

    onAdd({ task, description });   // send data up to parent
    setTask('');                    // reset fields
    setDescription('');
  };

  return (
    <div>
      <h2>New task:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <br /><br />
        <textarea
          placeholder="Describe it"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TodoForm;