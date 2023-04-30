import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

function AddTodo({ addTodo }) {
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    addTodo({ id: Date.now(), task: value, completed: false });
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button className="button">Add New List</button>
    </form>
  );
}

function TodoItem({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <div style={{ display: 'flex' }}>
      <input
        type="checkbox"
        className='checkbox'
        checked={todo.completed}
        onClick={handleCheckboxClick}
      />
      <li
        style={{
          textDecoration: todo.completed ? 'line-through' : null
        }}
      >
        {todo.task}
      </li>
      <button onClick={handleRemoveClick}>Delete</button>
    </div>
  );
}

export default TodoList;