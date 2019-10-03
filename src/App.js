import React from "react";
import logo from "./data/img/logo.gif";
import "./data/css/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hacker News</h1>
      </header>
    </div>
  );
}

export default App;
