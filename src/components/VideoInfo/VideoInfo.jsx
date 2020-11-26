import React from "react";
import { numberWithCommas } from "./../../Utilities";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import VideoNumbers from "./../VideoNumbers/VideoNumbers";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ReplyIcon from "@material-ui/icons/Reply";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import VideoTags from "./../VideoTags/VideoTags";

const moment = require("moment");
require("moment-duration-format");
const VideoInfo = ({ title, views, date, likes, dislikes, tags }) => {
  let percentage;
  const percentageReviews = (likes, dislikes) => {
    let numberlikes = parseInt(likes);
    let numberdislikes = parseInt(dislikes);
    let totalReviews = numberlikes + numberdislikes;
    let percentage = Math.round((numberlikes / totalReviews) * 100);
  };
  const likeBarWidth = {
    width: "" + percentage + "%",
  };
  return (
    <div className="singleVideo__videoInfo">
      <div className="singleVideo__container">
        <div className="singleVideo__videoTitle">
          {tags != undefined ? <VideoTags tags={tags} /> : null}
          <h2>{title}</h2>
          <VideoNumbers
            views={numberWithCommas(views)}
            timestamp={moment(date).fromNow()}
          />
        </div>
        <div className="singleVideo__buttons">
          <div className="singleVideo_reviews">
            <div className="singleVideo__thumbs">
              {percentageReviews(likes, dislikes)}
              <Button startIcon={<ThumbUpAltIcon />}>
                {numberWithCommas(likes)}
              </Button>
              <Button startIcon={<ThumbDownIcon />}>
                {numberWithCommas(dislikes)}
              </Button>
            </div>
            <div className="singleVideo__bars">
              <div className="singleVideo__likeBar" style={likeBarWidth}></div>
            </div>
          </div>
          <Button className="invertIcon" startIcon={<ReplyIcon />}>
            Share
          </Button>
          <Button startIcon={<PlaylistAddIcon />}>Save</Button>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
