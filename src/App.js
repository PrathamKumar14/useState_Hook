//jshint esversion: 6

import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  var now = new Date().toLocaleTimeString("en-GB");

  var [time, setTime] = useState(now);

  function updateTime() {
    setTime(new Date().toLocaleTimeString("en-GB"));
  }

  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;
