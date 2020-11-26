import React, { useEffect, useContext } from "react";
import VideoCard from "../VideoCard/VideoCard";
import { Link, withRouter } from "react-router-dom";
import { VideoContext } from "../../VideoContext";
import { numberWithCommas } from "./../../Utilities";
import "./VideoGallery.css";

const moment = require("moment");
require("moment-duration-format");

const VideoGallery = () => {
  const [apiVideos, setApiVideos] = useContext(VideoContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <section className="videoGallery">
      <div className="videoGallery__wrapper">
        {apiVideos.map((apiVideo) => (
          <Link to={`/video/${apiVideo.snippet.channelId}/${apiVideo.id}`}>
            <VideoCard
              key={apiVideo.id}
              title={apiVideo.snippet.title}
              thumbnail={apiVideo.snippet.thumbnails.high.url}
              author={apiVideo.snippet.channelTitle}
              views={numberWithCommas(apiVideo.statistics.viewCount)}
              timestamp={moment(apiVideo.snippet.publishedAt).fromNow()}
              duration={moment
                .duration(apiVideo.contentDetails.duration)
                .format("hh:mm:ss")}
              live={apiVideo.snippet.liveBroadcastContent}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
export default withRouter(VideoGallery);
