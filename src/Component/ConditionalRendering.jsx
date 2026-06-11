import React from "react";

export default function ConditionalRendering() {
  const user = true;
  return (
    <div>
      {/* ternary */}
      {user ? <h2>Welcome back</h2> : <h2>pleacse Login</h2>}

      {/* logical */}
      {user && (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          omnis vitae odio ab officia corrupti nobis provident! Exercitationem
          error repellat cum consectetur aut officiis consequuntur aliquid,
          velit deleniti reprehenderit obcaecati.
        </p>
      )}
    </div>
  );
}
