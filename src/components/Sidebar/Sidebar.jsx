import React from "react";
import SidebarButton from "./../SidebarButton/SidebarButton";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import TheatersIcon from "@material-ui/icons/Theaters";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import SettingsIcon from "@material-ui/icons/Settings";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import HelpIcon from "@material-ui/icons/Help";
import FlagIcon from "@material-ui/icons/Flag";
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarButton Icon={HomeIcon} title={"Home"} />
      <SidebarButton Icon={WhatshotIcon} title={"Trending"} />
      <SidebarButton Icon={SubscriptionsIcon} title={"Subscriptions"} />
      <hr className="sidebar__separator"/>
      <SidebarButton Icon={VideoLibraryIcon} title={"Libray"} />
      <SidebarButton Icon={HistoryIcon} title={"History"} />
      <SidebarButton Icon={OndemandVideoIcon} title={"Your videos"} />
      <SidebarButton Icon={TheatersIcon} title={"Your movies"} />
      <SidebarButton Icon={WatchLaterIcon} title={"Watch Later"} />
      <hr className="sidebar__separator"/>
      <h2 className="sidebar__blockTitle">Más de Youtube</h2>
      <SidebarButton Icon={YouTubeIcon} title={"Youtube Premium"} />
      <SidebarButton Icon={TheatersIcon} title={"Movies"} />
      <SidebarButton Icon={SportsEsportsIcon} title={"Gaming"} />
      <SidebarButton Icon={LiveTvIcon} title={"Live"} />
      <SidebarButton Icon={EmojiObjectsIcon} title={"Learning"} />
      <SidebarButton Icon={SettingsIcon} title={"Settings"} />
      <SidebarButton Icon={FlagIcon} title={"Report History"} />
      <SidebarButton Icon={HelpIcon} title={"Help"} />
      <SidebarButton Icon={AnnouncementIcon} title={"Send feedback"} />
    </div>
  );
};

export default Sidebar;
