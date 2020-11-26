import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TuneIcon from "@material-ui/icons/Tune";
import VideoResult from "./../VideoResult/VideoResult";
import { key } from "./../../Utilities";
import "./SearchPage.css";

const SearchPage = (props) => {
  const [resultVideos, setResultVideos] = useState([]);
  const query = props.match.params.searchterm;
  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&q=${query}&safeSearch=moderate&type=video&videoDefinition=any&videoDimension=any&videoDuration=any&key=${key}`
      )
      .then((response) => {
        const { data } = response;
        const searchResults = data["items"];
        setResultVideos(searchResults);
      });
  }, []);
  return (
    <div className="searchpage">
      <div className="searchpage__wrapper">
        <div className="searchpage__filter">
          <Button startIcon={<TuneIcon />}>Filter</Button>
        </div>
        <hr className="searchpage__separator" />
        <div className="resultsGallery">
          {resultVideos.map((resultVideo) => {
            return (
              <Link
                to={`/video/${resultVideo.snippet.channelId}/${resultVideo.id.videoId}`}
              >
                <VideoResult
                  key={resultVideo.id.videoId}
                  videoId={resultVideo.id.videoId}
                  title={resultVideo.snippet.title}
                  description={resultVideo.snippet.description}
                  author={resultVideo.snippet.channelTitle}
                  thumbnail={resultVideo.snippet.thumbnails.medium.url}
                  live={resultVideo.snippet.liveBroadcastContent}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default withRouter(SearchPage);
