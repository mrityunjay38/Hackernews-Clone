import React from "react";
import logo from "./data/img/logo.gif";
import "./data/css/App.css";
import Stories from "./components/stories";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hacker News</h1>
      </header>
      <section className="Story">
        <table>
          <tbody>
            <Stories />
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
