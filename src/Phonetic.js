import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic.audio);
  if (props.phonetic.audio === "") {
    return <div className="Phonetic">{props.phonetic.text}</div>;
  }else{
  return (
    <div className="Phonetic">
      {props.phonetic.text}
      <br />
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
        Listen
      </a>
    </div>
  );}
}
