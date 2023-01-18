import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  Notifications,
  NotificationsOutlined,
} from "@material-ui/icons";
import React from "react";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="leftLogo">
          <span>L-shopping</span>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <ChatBubbleOutline style={{ color: "#03C9D7" }} />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            <NotificationsOutlined style={{ color: "#03C9D7" }} />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topProfileInfo">
            <Avatar className="topAvatar" />
            <span>Hi! Salman</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
