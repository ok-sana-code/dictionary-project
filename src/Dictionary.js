import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results"

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function HandleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    // Dokumentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(HandleResponse);
  }

  function HandleChangeValue(response) {
    setKeyword(response.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form className="shadow p-4" onSubmit={search}>
          <h2>What word do you want to look up?</h2>
          <input
            className="form-control search-input"
            type="rearch"
            placeholder="Type a word.."
            autoFocus={true}
            onChange={HandleChangeValue}
          ></input>
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
