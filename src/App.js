import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";

const Clock = () => {
  const date = new Date();

  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  // const [milliSeconds, setMilliSeconds] = useState(date.getMilliseconds());

  const getTime = () => {
    setTimeout(() => {
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
      setSeconds(new Date().getSeconds());
    }, 1000);
  };

  // useEffect(() => {
  //   getTime();
  // }, []);

  useEffect(() => {
    getTime();
  }, [seconds]);

  return (
    <>
      <div>
        {hours > 12 ? 24 - hours : hours}:{minutes}:{seconds}
      </div>
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Clock />
    </div>
  );
}
