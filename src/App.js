import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href=".">Triples</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
                aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/iamsterdam800/triples">GitHub</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <p/>
        <h2>Triple System Design</h2>
        <p>This page allows to generate solutions to the generalized <a href="https://en.wikipedia.org/wiki/Kirkman%27s_schoolgirl_problem" target="_blank">Kirkman's schoolgirl problem</a> for an arbitrary number of schoolgirls.</p>
      </div>
    </div>
  );
}

export default App;
