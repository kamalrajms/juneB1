import React, { useState } from "react";

export default function ConditionFrom() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    terms: false,
  });

  const [error, setError] = useState("");

  const handleChage = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  //   const handleChage2 = (e) => {
  //     const { name, checked } = e.target;
  //     setFormData({
  //       ...formData,
  //       [name]: checked,
  //     });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hello");
    if (!formData.userName || !formData.email || !formData.password) {
      setError("all the fields are requited");
      return;
    }
    if (!formData.terms) {
      setError("must accept the checkbox");
      return;
    }
    setError("");
    alert("successfully submited the form");
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Condition from</h2>
        {error && <h2 style={{ color: "red" }}>{error}</h2>}
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChage}
          placeholder="enter a name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChage}
          placeholder="enter a email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChage}
          placeholder="enter a password"
        />
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handleChage}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
