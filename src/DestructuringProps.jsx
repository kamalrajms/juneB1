import React from "react";

export default function DestructuringProps({ name, city, num }) {
  return (
    <div className="destructure">
      <h3>name:{name}</h3>
      <h3>city:{city}</h3>
      <h3>num:{num}</h3>
    </div>
  );
}
