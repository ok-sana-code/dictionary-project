import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos"

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  function HandleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePhotosResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // Dokumentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(HandleResponse);

    let apiKey = "563492ad6f917000010000017676f5e413034bda8240d0dbf78fba5f";
    
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelsApiUrl, {
        headers: {
          Authorization: { apiKey },
        },
      })
      .then(handlePhotosResponse);
  }

  function HandleSubmit(event) {
    event.preventDefault();
    search();
  }

  function HandleChangeValue(response) {
    setKeyword(response.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form className="shadow p-4" onSubmit={HandleSubmit}>
            <h2>What word do you want to look up?</h2>
            <input
              className="form-control search-input"
              type="search"
              placeholder="Type a word.."
              autoFocus={true}
              onChange={HandleChangeValue}
            ></input>
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return " Loading..";
  }
}
