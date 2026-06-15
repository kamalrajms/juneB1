import React, { useState, useEffect } from "react";

export default function StopWatch() {
  const [sec, setSec] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 100);
    }
    return () => clearInterval(timer);
  }, [running]);
  const handleStart = () => {
    setRunning(true);
  };
  //   console.log(running);
  const handleStop = () => {
    setRunning(false);
  };

  const handleReset=()=>{
    setSec(0)
    setRunning(false)
  }
  return (
    <div>
      <h2>timer : {sec}</h2>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
