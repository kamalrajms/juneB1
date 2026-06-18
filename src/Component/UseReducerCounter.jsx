import React, { useReducer } from "react";

export default function UseReducerCounter() {
  const initialState = { count: 0 };

  function counterFun(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  }
  //   action={ type: "increment" }

  const [state, dispatch] = useReducer(counterFun, initialState);
  return (
    <div>
      <h1>Counter:{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}
