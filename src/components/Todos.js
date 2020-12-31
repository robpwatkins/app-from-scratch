import React from 'react';

export default function Todos({ todos, setTodos }) {
  return (
    <div>
      {todos.map((todo, idx) => {
        return (
          <div style={{display: 'flex'}}>
            <h3 style={{margin: '0 10px 0 0'}}>{todo}</h3>
            <span onClick={() => {
              let todosCopy = todos.slice();
              todosCopy.splice(idx, 1);
              setTodos(todosCopy);
            }}>x</span>
          </div>
        )
      })}      
    </div>
  )
}