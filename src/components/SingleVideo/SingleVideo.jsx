import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoPlayer from "./../VideoPlayer/VideoPlayer";
import VideoSidebar from "./../VideoSidebar/VideoSidebar";
import VideoComment from "../VideoComment/VideoComment";
import VideoDescription from "./../VideoDescription/VideoDescription";
import VideoInfo from "./../VideoInfo/VideoInfo";
import { withRouter } from "react-router-dom";
import { key } from "./../../Utilities";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import "./SingleVideo.css";

const SingleVideo = (props) => {
  const [singleVideo, setSingleVideo] = useState([]);
  const [comments, setComments] = useState([]);

  const [expandComments, setExpandComments] = useState("closed");

  const toggleComments = () => {
    expandComments == "closed"
      ? setExpandComments("open")
      : setExpandComments("closed");
  };

  const expandedBlock = {
    height: "auto",
  };
  const videoId = props.match.params.videoId;

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${videoId}&key=${key}`
      )
      .then((response) => {
        const { data } = response;
        const singleVideoResults = data["items"];
        setSingleVideo(singleVideoResults);
      });
  }, [videoId]);
  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${key}`
      )
      .then((response) => {
        const { data } = response;
        const commentsResults = data["items"];
        setComments(commentsResults);
      });
  }, [videoId]);

  return (
    <>
      <div className="singleVideo">
        <VideoPlayer video={videoId} />
        {singleVideo.map((singleVideoResponse) => (
          <>
            <VideoInfo
              title={singleVideoResponse.snippet.title}
              views={singleVideoResponse.statistics.viewCount}
              date={singleVideoResponse.snippet.publishedAt}
              likes={singleVideoResponse.statistics.likeCount}
              dislikes={singleVideoResponse.statistics.dislikeCount}
              tags={singleVideoResponse.snippet.tags}
            />
            <hr />
            <VideoDescription
              description={singleVideoResponse.snippet.description}
            />
          </>
        ))}
        <hr />
        <div
          className="singleVideo__comments"
          onClick={() => toggleComments()}
          style={expandComments != "closed" ? expandedBlock : null}
        >
          <UnfoldMoreIcon className="singleVideo_expandComments" />
          <div className="singleVideo__container">
            <h3>Comments</h3>
            {comments.map((comment) => (
              <>
                <VideoComment
                  avatar={
                    comment.snippet.topLevelComment.snippet
                      .authorProfileImageUrl
                  }
                  author={
                    comment.snippet.topLevelComment.snippet.authorDisplayName
                  }
                  date={comment.snippet.topLevelComment.snippet.publishedAt}
                  text={comment.snippet.topLevelComment.snippet.textOriginal}
                />
              </>
            ))}
          </div>
        </div>
      </div>
      <VideoSidebar />
    </>
  );
};
export default withRouter(SingleVideo);
