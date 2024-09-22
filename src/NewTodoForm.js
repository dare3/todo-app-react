// NewTodoForm.js
import React, { useState } from 'react';

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      addTodo(task);
      setTask(""); // Clear input field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={task} 
        onChange={handleChange} 
        placeholder="New Todo" 
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
