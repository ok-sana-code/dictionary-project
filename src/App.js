import React from 'react';
import Dictionary from "./Dictionary"
import './App.css';
import img from "./img.gif"
export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <header className="App-header">
          <h1>Dictionary</h1>
          <img className="img-fluid" src={img} alt="dictionary" />
        </header>
        <main className="Main-content">
          <Dictionary defaultKeyword="freedom" />
        </main>
        <footer>
          <small>
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/oksana-shvets-548086244/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Oksana Shvets
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://github.com/ok-sana-code/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://chipper-tulumba-b40688.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
            <br />
            <a className='Photos-link' href="https://www.pexels.com">Photos provided by Pexels</a>
          </small>
        </footer>
      </div>
    </div>
  );
}


