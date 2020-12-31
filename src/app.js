import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  console.log(todos);
  return (
    <div>
      <Form setTodos={setTodos} todos={todos} />
      <Todos setTodos={setTodos} todos={todos} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))