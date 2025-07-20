import React, { useState } from "react";
import ChatBox from "./components/Chatbox";
import "./app.css";

function App() {
  return (
    <div className="App">
      <h1>🎓 AI Notes Summeriser</h1>
      <ChatBox />
    </div>
  );
}

export default App;
