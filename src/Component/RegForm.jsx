import React, { useState } from "react";

export default function RegForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, //previous data
      [name]: value,
      //   [e.target.name]: e.target.value, //updating data
    });
  };
  console.log(formData);

  return (
    <div>
      <h2>Reg- form</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="ente a name"
      />
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="ente a email"
      />
      <input
        type="text"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="ente a age"
      />
    </div>
  );
}
