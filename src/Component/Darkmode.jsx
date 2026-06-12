import React, { useState } from "react";

export default function Darkmode() {
  const [dark, setDark] = useState(false);
  return (
    <div
      style={{
        backgroundColor: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#333",
        padding: "20px",
      }}
    >
      <h2>You are in {dark ? "Dark" : "Light"} mode</h2>
      <button onClick={() => setDark(!dark)}>
        switch to {dark ? "Light" : "Dark"} mode
      </button>
    </div>
  );
}
