// Todo.js
import React, { useState } from 'react';
// import './Todo.css'; // Optional for styling

function Todo({ id, task, removeTodo, updateTodo, completed }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);

  const handleRemove = () => {
    removeTodo(id);
  };

  const handleEdit = () => {
    updateTodo(id, newTask);
    setIsEditing(false);
  };

  return (
    <div className={`todo ${completed ? 'completed' : ''}`}>
      {isEditing ? (
        <form onSubmit={(e) => { e.preventDefault(); handleEdit(); }}>
          <input 
            type="text" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <span>{task}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleRemove}>X</button>
          <button onClick={() => updateTodo(id, task, !completed)}>
            {completed ? 'Unmark' : 'Mark as completed'}
          </button>
        </>
      )}
    </div>
  );
}

export default Todo;
