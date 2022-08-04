import React, {useState} from "react";
import "./Dictionary.css"

export default function Dictionary(){

let[keyword,setKeyword] = useState("")

function search(event){
    event.preventDefault();
    alert(`Searchind for ${keyword} definition`);
}

function HandleChangeValue(response){
    setKeyword(response.target.value)
}


    return <div className="Dictionary">
        <form onSubmit={search}>
            <input type="rearch" placeholder="Type a word.." autoFocus={true} onChange={HandleChangeValue}>
            </input>
        </form>
        
       </div>;
}