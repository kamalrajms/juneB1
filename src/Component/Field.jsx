import React, { useState } from "react";

export default function Field() {
  const [name, setName] = useState("hi");
  const [check, setCheck] = useState(false);
  console.log(name);
  console.log(check);

  return (
    <div>
      <nav>
        <label htmlFor="">name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h2>dispaly:{name}</h2>
      </nav>
      <nav>
        <input
          type="checkbox"
          checked={check}
          onChange={(e) => setCheck(e.target.checked)}
        />
        <label htmlFor="">checkbox</label>
      </nav>

      {/* <select name="" id="">
            <option value="apple">apple</option>
            <option value="react">orange</option>
        </select> */}
    </div>
  );
}
