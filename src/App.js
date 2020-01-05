import React from 'react';
import './App.css';
import Form from "./Form";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href=".">Triples</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
                aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
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
        <p>This project allows you to construct triples from a set of people, so that each person is included in a triple with every other person only once.</p>
        <p>One example of it is a <a href="https://en.wikipedia.org/wiki/Kirkman%27s_schoolgirl_problem" target="_blank" rel="noopener noreferrer">Kirkman's schoolgirl problem</a>,
          where it's required to set up daily walks for 15 schoolgirls in triples so that they would walk with every other schoolgirl exactly once.
        </p>
        <p>Another example is setting up a tournament for a <a href="https://www.quora.com/What-are-some-fun-games-that-can-be-played-with-3-people" target="_blank" rel="noopener noreferrer">3-player game</a>,
          such as: <a href="https://en.wikipedia.org/wiki/Preferans" target="_blank" rel="noopener noreferrer">Preferans</a> and
          other <a href="https://vipspades.com/blog/3-player-card-games/" target="_blank" rel="noopener noreferrer">card games</a>,
          multi-player games like <a href="https://en.wikipedia.org/wiki/Monopoly_(game)" target="_blank" rel="noopener noreferrer">Monopoly</a>,
          or one of <a href="https://www.silvergames.com/en/t/3-player" target="_blank" rel="noopener noreferrer">3-Player online games</a>.
        </p>
        <p>Other applications: <a href="https://en.wikipedia.org/wiki/Cooperative_learning" target="_blank" rel="noopener noreferrer">Cooperative learning</a> strategy
          for increasing interaction within classroom teaching, <a href="https://en.wikipedia.org/wiki/Progressive_dinner" target="_blank" rel="noopener noreferrer">Progressive dinner</a> party
          designs, <a href="https://en.wikipedia.org/wiki/Speed_networking" target="_blank" rel="noopener noreferrer">Speed Networking</a> events,
          Sports Competitions.
        </p>

        <Form/>

      </div>
    </div>
  );
}

export default App;
