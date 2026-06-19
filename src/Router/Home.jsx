import React, { useState, useEffect } from "react";
import UseParamHook from "../Component/UseParamHook";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [count, setCount] = useState(0);
  const page = useNavigate();
  useEffect(() => {
    if (count == 10) {
      page("/contact");
    }
  }, [count]);
  return (
    <div>
      <h2> home component--{count}</h2>
      <button onClick={() => setCount(count + 1)}>increment---{count}</button>
      <button onClick={() => page("/contact")}>move to contact</button>
      <UseParamHook />
    </div>
  );
}
