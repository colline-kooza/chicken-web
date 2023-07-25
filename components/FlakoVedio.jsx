"use client";
import React, { useState } from "react";
import { BsYoutube } from "react-icons/bs";
import Video from "./Video";

export default function FlakoVedio() {
  const [displayVedio, setDisplayvedio] = useState(false);
  console.log(displayVedio);
  const showVideo = () => {
    console.log("btn clicked");
    setDisplayvedio(true);
  };
  function RemoveVideo() {
    console.log("btn clicked");
    setDisplayvedio(false);
  }
  return (
    <>
      {displayVedio ? (
        <Video removeFunction={RemoveVideo} />
      ) : (
        <div className="Vedio">
          <div className="vedio-header">
            <h2>Flako Feeds</h2>
          </div>
          <div className="Vedio-container">
            <div className="vedio-button">
              <button onClick={showVideo}>
                <BsYoutube size={100} />{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
