import React from "react";
import { CiCircleRemove } from "react-icons/ci";

function Video({ removeFunction }) {
  console.log(removeFunction);
  return (
    <div className="ShownVedio">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/bYRtPpru3Ng"
        title="YouTube video player"
        FrameBorder="0"
        allow="accelerometer; autoplay= clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="remove-icon">
        <button onClick={removeFunction}>
          <CiCircleRemove size={50} color="green" />
        </button>
      </div>
    </div>
  );
}

export default Video;
