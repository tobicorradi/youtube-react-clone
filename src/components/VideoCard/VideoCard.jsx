import React, { useState, useEffect } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import VideoCardIcons from "./../VideoCardIcons/VideoCardIcons";
import VideoDuration from "./../VideoDuration/VideoDuration";
import VideoNumbers from "./../VideoNumbers/VideoNumbers";
import LiveLabel from "./../LiveLabel/LiveLabel";
import "./VideoCard.css";

const VideoCard = ({
  index,
  thumbnail,
  title,
  author,
  views,
  timestamp,
  live,
  duration,
}) => {
  const thumbnailStyle = {
    backgroundImage: "url(" + thumbnail + ")",
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="videoCard">
      {loading ? (
        <Skeleton animation="wave" variant="rect" width={360} height={200} />
      ) : (
        <div className="videoCard__thumbnail" style={thumbnailStyle}>
          <VideoDuration duration={duration} />
          <VideoCardIcons />
        </div>
      )}
      <div className="videoCard__body">
        <div className="videoCard__info">
          {loading ? (
            <Skeleton animation="wave" variant="text" />
          ) : (
            <h2 className="videoCard__title">{title}</h2>
          )}
          {loading ? (
            <Skeleton animation="wave" variant="text" width={284} height={20} />
          ) : (
            <React.Fragment>
              <span className="videoCard__author">{author}</span>
              <VideoNumbers views={views} timestamp={timestamp} />
              <LiveLabel live={live} />
            </React.Fragment>
          )}
        </div>
        <MoreVertIcon className="videoCard__settingsIcon" />
      </div>
    </div>
  );
};

export default VideoCard;
