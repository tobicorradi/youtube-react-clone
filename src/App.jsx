import React from "react";
import Header from "./components/Header/Header";
import VideoGallery from "./components/VideoGallery/VideoGallery";
import Sidebar from "./components/Sidebar/Sidebar";
import SearchPage from "./components/SearchPage/SearchPage";
import SingleVideo from "./components/SingleVideo/SingleVideo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { VideoProvider } from "./VideoContext";
import Footer from './components/Footer/Footer'
import "./App.css";

const App = () => {
  return (
    <VideoProvider>
      <div class="app">
        <Router>
          <Header />
          <Switch>
            <Route path="/search/:searchterm">
              <div className="main-content">
                <Sidebar />
                <SearchPage />
              </div>
              <Footer />
            </Route>
            <Route path="/video/:channelId/:videoId">
              <div className="main-content singleVideo__wrapper">
                {/* <Sidebar /> */}
                <SingleVideo />
              </div>
              <Footer />
            </Route>
            <Route path="/">
              <div className="main-content">
                <Sidebar />
                <VideoGallery />
              </div>
              <Footer />
            </Route>
          </Switch>
        </Router>
      </div>
    </VideoProvider>
  );
};

export default App;
