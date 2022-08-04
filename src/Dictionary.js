import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function HandleResponse(response) {
    console.log(response.data[0]);
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
      <form onSubmit={search}>
        <input
          type="rearch"
          placeholder="Type a word.."
          autoFocus={true}
          onChange={HandleChangeValue}
        ></input>
      </form>
    </div>
  );
}
