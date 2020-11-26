import React, { useState, useEffect } from "react";
import axios from "axios";
import { key, numberWithCommas } from "./../../Utilities";
import Avatar from "@material-ui/core/Avatar";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";

const VideoDescription = (props) => {
  const [expandDescription, setExpandDescription] = useState("closed");
  const [channel, setChannel] = useState([]);
  const toggleDescription = () => {
    expandDescription == "closed"
      ? setExpandDescription("open")
      : setExpandDescription("closed");
  };
  const expandedBlock = {
    height: "auto",
    overflow: "auto",
  };
  const channelId = props.match.params.channelId;
  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2C%20statistics&id=${channelId}&key=${key}`
      )
      .then((response) => {
        const { data } = response;
        const channelResults = data["items"];
        setChannel(channelResults);
      });
  }, [channelId]);
  console.log(channel);
  return (
    <div
      className="singleVideo__description"
      style={expandDescription != "closed" ? expandedBlock : null}
    >
      <div className="singleVideo__container">
        <div className="singleVideo__descriptionHead">
          {channel.map((channelData) => (
            <>
              <div className="singleVideo__channel">
                <Avatar src={channelData.snippet.thumbnails.default.url} />
                <div className="singleVideo__channelText">
                  <span className="singleVideo__author">
                    {channelData.snippet.title}
                  </span>
                  <span className="singleVideo__subscribers">
                    {numberWithCommas(channelData.statistics.subscriberCount)}{" "}
                    subscribers
                  </span>
                </div>
              </div>
              <div className="singleVideo__subscribeBlock">
                <Button
                  className="singleVideo__subscribeButton"
                  variant="contained"
                  disableElevation
                >
                  Subscribe
                </Button>
                <Button startIcon={<NotificationsIcon />} />
              </div>
            </>
          ))}
        </div>
        <div className="singleVideo__descriptionBody">
          <p>{props.description}</p>
        </div>
      </div>
      <Button
        onClick={() => toggleDescription()}
        className="singleVideo__showDescription"
      >
        {expandDescription != "closed" ? "Show less" : "Show more"}
      </Button>
    </div>
  );
};

export default withRouter(VideoDescription);
