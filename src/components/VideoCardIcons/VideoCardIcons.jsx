import React from "react";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import './VideoCardIcons.css'

const VideoCardIcons = () => {
  return (
    <div className="videoCard__icons">
      <div className="videoCard__iconWrapper">
        <WatchLaterIcon />
      </div>
      <div className="videoCard__iconWrapper">
        <PlaylistPlayIcon />
      </div>
    </div>
  );
};

export default VideoCardIcons;
