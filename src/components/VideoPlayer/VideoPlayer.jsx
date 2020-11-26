import React from "react";
import "./VideoPlayer.css";
const VideoPlayer = ({ video }) => {
  return (
    <div className="singleVideo__videoPlayer">
      <iframe
        className="singleVideo__video"
        height="315"
        src={`https://www.youtube.com/embed/${video}?autoplay=1`}
        // src={`https://www.youtube.com/embed/${video}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
