import React from "react";
import "./Phonetic.css";


export default function Phonetic(props) {
let audio = new Audio(props.phonetic.audio);
function handleClick(event) {
  audio.play();
}
if (props.phonetic.audio && props.phonetic.text) {
  return (
    <div className="Phonetic">
      <span onClick={handleClick} title="Listen" className="icon">
        🔉
      </span>{" "}
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
} else {
  return null;
}
}
