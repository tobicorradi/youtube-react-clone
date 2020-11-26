import React from "react";
import "./SidebarButton.css";

const SidebarButton = ({ Icon, title }) => {
  return (
    <a href="#" className="sidebar__button">
      <div className="sidebar__wrapper">
        <Icon className="sidebar__icon"/>
        <span className="sidebar__title">{title}</span>
      </div>
    </a>
  );
};
export default SidebarButton;
