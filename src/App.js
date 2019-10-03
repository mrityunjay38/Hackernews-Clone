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
      <section className="Story">
        <table>
          <tr>
            <td>
              <div className="Counter">
            <button className="upvote"></button>
            <span className="Count"></span>
            <button className="downvote"></button>
            </div>
            </td>
            <td><a href={**link}><h2>{**title}</h2></a></td>
            <td>
              <p>By {**user} | {**time} ago | {**comment count} <a href={comments}>comments</a>
              </p>
            </td>
          </tr>
        </table>
      </section>
    </div>
  );
}

export default App;
