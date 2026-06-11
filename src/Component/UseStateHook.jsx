import React, { useState } from "react";

export default function UseStateHook() {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState(true);
  console.log(count);
  console.log(user);

  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <h3>Stackly</h3>
      <nav>
        {user ? <h3>welcome back...</h3> : <h3>please Login...</h3>}
        {user && (
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia a
            nisi deleniti fuga laboriosam ea blanditiis architecto porro
            deserunt perferendis sed amet eveniet, ab magni, iste id soluta.
            Ipsa, ullam.
          </p>
        )}
        <button onClick={() => setUser(!user)}>
          Sign {user ? "Out" : "in"}
        </button>
      </nav>
    </div>
  );
}
// !true==false
// !false==true
