import React from "react";

export default function ListRendering() {
  const fruits = ["apple", "banana", "Mango", "grapes"];

  const user = [
    { id: 1, name: "rahul" },
    { id: 2, name: "kumar" },
    { id: 3, name: "chandru" },
  ];
  return (
    <div>
      <h2>list rendering</h2>
      {fruits.map((name, ind) => (
        <h2 key={ind}>{name}</h2>
      ))}
      
      <h2>User detailes</h2>
      {user.map((person) => (
        <h4 key={person.id}>{person.name}</h4>
      ))}
    </div>
  );
}
// person={ id: 1, name: "rahul" }
// person.name
