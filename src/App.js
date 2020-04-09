import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Start adding here</p>
        <p>
          Run{' '}
          <code>
            docker run --name myname -p 8080:5000 --rm dhruvingbc/github-actions-test:latest
          </code>{' '}
          to download and run docker image from dockerhub
        </p>
      </header>
    </div>
  );
}

export default App;
