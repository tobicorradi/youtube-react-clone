import React from "react";

const VideoNumbers = ({ views, timestamp }) => {
  return (
    <div className="videoCard__numbers">
      {views != undefined ? (
        <span className="videoCard__views">{views} views</span>
      ) : null}
      <span className="videoCard__timestamp">{timestamp}</span>
    </div>
  );
};

export default VideoNumbers;
