import React, { useState } from "react";
import Logo from "./../Logo/Logo";
import Icon from "@material-ui/core/Icon";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import GoogleLogin from "react-google-login";
import GoogleLogout from "react-google-login";
import UserMenu from "./../UserMenu/UserMenu";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Tooltip from "@material-ui/core/Tooltip";
import { Link, withRouter } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [modal, setModal] = useState("closed");
  const [searchMobile, setSearchMobile] = useState("closed");

  const [inputSearch, setInputSeach] = useState("");

  const toggleModal = () => {
    modal == "closed" ? setModal("open") : setModal("closed");
  };

  const toggleSearch = () => {
    searchMobile == "closed"
      ? setSearchMobile("open")
      : setSearchMobile("closed");
  };

  const responseGoogle = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    console.log(response.profileObj);
  };
  const iconFill = {
    fill: "#605951",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <header className="header">
      <div className="header__logoContainer">
        <MenuIcon id="menuOpen" />
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div
        className="header__searchBox"
        style={{display :searchMobile == "open" ? "block" : "none"}}
      >
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <ArrowBackIcon
            className="header__closeSearchBox"
            onClick={() => toggleSearch()}
          />
          <input
            type="text"
            onChange={(e) => setInputSeach(e.target.value)}
            placeholder="Search"
            value={inputSearch}
          />
          {console.log(inputSearch)}
          <Link to={`/search/${inputSearch}`}>
            <button type="submit">
              <SearchIcon style={iconFill} />
            </button>
          </Link>
        </form>
      </div>
      <div className="header__profileIcons">
        <SearchIcon className="header__mobileIcons" style={iconFill}  onClick={() => toggleSearch()}/>
        {name != "" ? (
          <React.Fragment>
            <Tooltip title="Create" arrow>
              <VideoCallIcon
                className="header__desktopIcons"
                style={iconFill}
              />
            </Tooltip>
            <Tooltip title="Youtube Apps" arrow>
              <AppsIcon className="header__desktopIcons" style={iconFill} />
            </Tooltip>
            <Tooltip title="Notifications" arrow>
              <NotificationsIcon
                className="header__desktopIcons"
                style={iconFill}
              />
            </Tooltip>
            <Avatar
              className="header__avatar"
              alt="avatar image"
              src={url}
              onClick={() => toggleModal()}
            />
            {modal == "open" ? (
              <UserMenu userName={name} userImage={url} userMail={email} />
            ) : null}
          </React.Fragment>
        ) : (
          <GoogleLogin
            render={(renderProps) => (
              <Button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="header__loginButton"
                variant="contained"
                color="primary"
                size="large"
                variant="outlined"
                startIcon={<AccountCircleIcon />}
              >
                Sign In
              </Button>
            )}
            className="header__loginButton"
            clientId="261110956967-qntl4csnc3v1ah5dp8c017fe41nkgmvt.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            buttonText="Login"
            cookiePolicy={"single_host_origin"}
          />
        )}
      </div>
    </header>
  );
};

export default withRouter(Header);
