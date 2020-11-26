import React from "react";
import { numberWithCommas } from "../../Utilities";
import Avatar from "@material-ui/core/Avatar";
const moment = require("moment");
require("moment-duration-format");

const VideoComment = ({avatar, author, date, text}) => {
  return (
    <>
        <div className="comment">
          <Avatar
            src={avatar}
          />
          <div className="comment__body">
            <span className="comment__author">
              {author}
            </span>
            <span class="comment__date">
              {moment(
               date
              ).fromNow()}
            </span>
            <p className="comment_text">
              {text}
            </p>
          </div>
        </div>
    </>
  );
};

export default VideoComment;
