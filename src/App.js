import React from 'react';
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
        <h3>Triple System Design</h3>
        <p>This page allows to generate solutions to the generalized <a href="https://en.wikipedia.org/wiki/Kirkman%27s_schoolgirl_problem" target="_blank" rel="noopener noreferrer">Kirkman's schoolgirl problem</a> for an arbitrary number of schoolgirls.</p>

        <form>
          <fieldset>

            <div className="form-group">
              <label className="col-form-label" htmlFor="num">Number of schoolgirls:</label>
              <input type="number" className="form-control" min="3" step="2" placeholder="Try 7 or 11 or 3" id="num"/>
              <small>Enter an integer in the form <code>n*6-1±2</code>. E.g.: 3, 7, 9, 13, 15, 19, 21, etc.</small>
            </div>

            <button type="submit" className="btn btn-primary">Construct groups</button>

          </fieldset>
        </form>

      </div>
    </div>
  );
}

export default App;
