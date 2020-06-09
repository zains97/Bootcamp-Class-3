import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      Hello <strong>Zain</strong>!
      <p>
        The MERN stack consists the following languages:
        <div className="list-container">
          <ul>
            <li>Mongo Db</li>
            <li>Express JS</li>
            <li>React</li>
            <li>Node JS</li>
          </ul>
        </div>
        The following teachers teach us MERN stack development:
        <div className="list-container">
          <ol>
            <li>Adil Altaf</li>
            <li>Zia Khan</li>
            <li>Zeeshan Hanif</li>
          </ol>
        </div>
        Hi guys I am {20 + 3} years old I am excitedd to learn web development!
      </p>
    </div>
  );
}

export default App;
