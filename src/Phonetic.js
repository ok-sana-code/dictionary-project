import React from "react";
import "./Phonetic.css";
export default function Phonetic(props) {
  if (props.phonetic.audio === "") {
    return <div className="text">{props.phonetic.text}</div>;
  } else {
    return (
      <div className="Phonetic">
        <span className="text">{props.phonetic.text}</span>
        
          <a
            className="audio"
            href={props.phonetic.audio}
            target="_blank"
            rel="noopener noreferrer"
          >
            Listen
          </a>
        
      </div>
    );
  }
}
