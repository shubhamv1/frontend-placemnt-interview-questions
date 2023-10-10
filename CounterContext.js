
import "./styles.css";

import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext();

function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}
function Counter() {
  const { counter, increment, decrement } = useContext(CounterContext);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default App;
// Create a simple counter application
//  using React and useContext.
//  The application should display
//  a counter and two buttons, one
//  to increment the counter and one to decrement it. The counter value should be stored in a context object, and the buttons should use the useContext hook to access and update the counter value.
