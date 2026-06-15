import React, { useState, useEffect } from "react";

export default function UseEffectAPI() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch,axios
    // API=[{1},{2},{3},{4},...{10}]                // raw data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      // API=[{1},{2},{3},{4},...{10}]                // keys:value data
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);
  console.log(user);

  return (
    <div>
      <h1>user data</h1>
      {loading ? (
        <p>loading....</p>
      ) : (
        <ul>
          {/* // user=[{name:"regerg"},{2},{3},{4},...{10}]                // keys:value data */}
          {/* person={name:"rjjfgnrj/"} */}
          {user.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
