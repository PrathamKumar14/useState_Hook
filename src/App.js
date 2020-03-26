//jshint esversion: 6

import React, { useState } from "react";

function App() {

  setInterval(updateTime, 1000);

  var now = new Date().toLocaleTimeString("en-GB");
  // var day = new Date().getDay();
  var day = "";

  switch (new Date().getDay()) {

  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:

}

  var [time, setTime] = useState([now, day]);

  function updateTime() {
    setTime([new Date().toLocaleTimeString("en-GB"), day]);
  }

  return (
    <div className="container">
      <h1>{time[1]}</h1><br />
      <h2>{time[0]}</h2>
    </div>
  );
}

export default App;
