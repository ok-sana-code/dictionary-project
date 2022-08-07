import React from "react";
import "./Photos.css"
export default function Photos(props){
    console.log(props.photos);
    if (props.photos){
return (
  <section className="Photos shadow row">
    {props.photos.map(function (photo, index) {
      return (
        <div key={index}>
          <div className="col-4">
            <a
              href={photo.src.landscape}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="img-fluid"
                src={photo.src.landscape}
                alt={photo.alt}
              />
            </a>
          </div>
        </div>
      );
    })}
  </section>
);
    }else{
        return null
    }
      
}