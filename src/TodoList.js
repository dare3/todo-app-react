// TodoList.js
import React, { useState, useEffect } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.scss'; // Optional for styling

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    setTodos([...todos, { task, id: Date.now(), completed: false }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, newTask, completed) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, task: newTask || todo.task, completed: completed !== undefined ? completed : todo.completed } : todo
    ));
  };

  return (
    <div className="todo-list">
      <NewTodoForm addTodo={addTodo} />
      <div>
        {todos.map(todo => (
          <Todo 
            key={todo.id} 
            id={todo.id} 
            task={todo.task} 
            completed={todo.completed}
            removeTodo={removeTodo} 
            updateTodo={updateTodo} 
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
