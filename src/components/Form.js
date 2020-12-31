import React, { useState } from 'react';

export default function Form({ setTodos, todos }) {
  const [todo, setTodo] = useState('');

  const handleChange = event => {
    setTodo(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo('');
  }

  return (
    <form action="" onChange={handleChange} onSubmit={handleSubmit}>
      <input type="text" value={todo} />
      <br />
      <button>Click MEEEE</button>
    </form>
  )
}