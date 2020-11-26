import React from "react";

const VideoTags = ({ tags }) => {
  return (
    <div className="singleVideo__tagBlock">
      {tags.slice(0,3).map((tag) => (
        <span className="singleVideo__tag">#{tag}</span>
      ))}
    </div>
  );
};

export default VideoTags;
