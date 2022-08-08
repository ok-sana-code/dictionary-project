import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

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

    // Dokumentation: https://www.pexels.com/uk-ua/api/documentation/
    // let apiKey = "563492ad6f917000010000017676f5e413034bda8240d0dbf78fba5f";
    let apiKey = `563492ad6f91700001000001d54191cc025248e79b0414eed08695dc`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&page=1&per_page=9`;
    
    axios
      .get(pexelsApiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
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
        <section className="shadow">
          <form className="form-inline  " onSubmit={HandleSubmit}>
            <h2>What word do you want to look up?</h2>

            <input
              className="form-control search-input col-11"
              type="search"
              placeholder="Type a word.."
              autoFocus={true}
              onChange={HandleChangeValue}
            ></input>
            <input type="submit" title="Search" className=" d-none d-sm-inline btn col-1" value="🔍"></input>
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
