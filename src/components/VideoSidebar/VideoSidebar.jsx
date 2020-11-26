import React, { useContext } from "react";
import { VideoContext } from "../../VideoContext";
import { Link } from "react-router-dom";
import VideoResult from "./../VideoResult/VideoResult";
import "./VideoSidebar.css";

const moment = require("moment");
require("moment-duration-format");

const VideoSidebar = () => {
  const [apiVideos, setApiVideos] = useContext(VideoContext);
  const numberWithCommas = (num) => {
    if (num != undefined) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  };
  return (
    <div className="videoSidebar">
      <h3>Recommended</h3>
      {apiVideos.slice(0, 20).map((videos) => (
        <Link to={`/video/${videos.snippet.channelId}/${videos.id}`}>
          <VideoResult
            key={videos.id}
            videoId={videos.id}
            title={videos.snippet.title}
            thumbnail={videos.snippet.thumbnails.high.url}
            author={videos.snippet.channelTitle}
            views={numberWithCommas(videos.statistics.viewCount)}
            timestamp={moment(videos.snippet.publishedAt).fromNow()}
            duration={moment
              .duration(videos.contentDetails.duration)
              .format("hh:mm:ss")}
            live={videos.snippet.liveBroadcastContent}
          />
        </Link>
      ))}
    </div>
  );
};

export default VideoSidebar;
