// App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let interval;

    if (running) {
      console.log("start command");
      interval = setInterval(() => setCounter((x) => x + 1), 3000);
    } else {
      console.log("stop command");
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [running]);

  return (
    <div className="root">
      <div className="counter">{counter}</div>
      <div className={`colorDot ${running ? 'colorActive' : 'colorOff'}`}></div>
      <div className="buttons-container">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
