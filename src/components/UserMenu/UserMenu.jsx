import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./UserMenu.css";
import SidebarButton from "./../SidebarButton/SidebarButton";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import MovieIcon from "@material-ui/icons/Movie";
import ContactsIcon from "@material-ui/icons/Contacts";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import TranslateIcon from "@material-ui/icons/Translate";
import LanguageIcon from "@material-ui/icons/Language";
import SettingsIcon from "@material-ui/icons/Settings";
import SecurityIcon from "@material-ui/icons/Security";
import FeedbackIcon from "@material-ui/icons/Feedback";
import HelpIcon from '@material-ui/icons/Help';
import KeyboardIcon from "@material-ui/icons/Keyboard";

const UserMenu = ({ userName, userImage, userMail }) => {
  return (
    <div className="usermenu">
      <div className="usermenu__header">
        <Avatar src={userImage} />
        <div className="usermenu__information">
          <span className="usermenu__name">
            <strong>{userName}</strong>
          </span>
          <span className="usermenu__mail">{userMail}</span>
        </div>
      </div>
      <div className="usermenu__body">
        <SidebarButton Icon={AccountBoxIcon} title={"Your channel"} />
        <SidebarButton Icon={MovieIcon} title={"Purchases and memberships"} />
        <SidebarButton Icon={MonetizationOnIcon} title={"Youtube Studio"} />
        <SidebarButton Icon={ContactsIcon} title={"Switch account"} />
        <SidebarButton Icon={ExitToAppIcon} title={"Sign Out"} />
        <hr className="sidebar__separator"></hr>
        <SidebarButton Icon={Brightness4Icon} title={"Appaearance: Light"} />
        <SidebarButton Icon={TranslateIcon} title={"Language: English"} />
        <SidebarButton Icon={LanguageIcon} title={"Location: Argentina"} />
        <SidebarButton Icon={SettingsIcon} title={"Settings"} />
        <SidebarButton Icon={SecurityIcon} title={"Your data in Youtube"} />
        <SidebarButton Icon={HelpIcon} title={"Your data in Youtube"} />
        <SidebarButton Icon={FeedbackIcon} title={"Send feedback"} />
        <SidebarButton Icon={KeyboardIcon} title={"Keyboard shortcuts"} />
      </div>
    </div>
  );
};

export default UserMenu;
