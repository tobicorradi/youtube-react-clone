import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const VideoContext = createContext();
export const VideoProvider = (props) => {
  const [apiVideos, setApiVideos] = useState([]);

  const key = "AIzaSyDWgN6WIIb2CjU6T9S9QveuezdqCd2wji4";
  const maxResults = 30;
  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics%2C%20contentDetails&chart=mostPopular&maxResults=${maxResults}&key=${key}`
      )
      .then((response) => {
        const { data } = response;
        const videoResults = data["items"];
        setApiVideos(videoResults);
        console.log(videoResults);
      });
  }, []);
  return (
    <VideoContext.Provider value={[apiVideos, setApiVideos]}>
      {props.children}
    </VideoContext.Provider>
  );
};
