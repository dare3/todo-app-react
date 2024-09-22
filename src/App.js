// App.js
import React from 'react';
import TodoList from './TodoList';
import './App.scss'; // Assuming you have a main SASS file

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
