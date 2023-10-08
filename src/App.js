import React, { useReducer, useState } from "react";
import './App.css';

const initialTodos = [];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload.text,
          completed: false,
        },
      ];

    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case "CLEAR_COMPLETED":
      return state.filter(todo => !todo.completed);

    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch({
        type: "ADD_TODO",
        payload: { text: newTodo },
      });
      setNewTodo("");
    }
  }

  return (
    <div  className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                dispatch({ type: "TOGGLE_TODO", payload: { id: todo.id } })
              }
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>
        Clear Completed
      </button>
    </div>
  );
}

export default App;
