import "./App.css";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { CurrentlyReading } from "./components/CurrentlyReading/CurrentlyReadingPanel";
import { UserCard } from "./components/User/UserCard";
import { PostFeed } from "./components/Post/PostFeed";
import { TrendingPanel } from "./components/Trending/TrendingPanel";
import { LectureClubPanel } from "./components/LectureClub/LectureClubPanel";
import { Wheel } from "@uiw/react-color";

export function App() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Color wheel
  const [hex, setHex] = useState("#fff");

  const [isWheelVisible, setWheelVisible] = useState(false);
  const showColorWheel = () => {
    setWheelVisible(!isWheelVisible);
  };

  document.documentElement.style.setProperty("--custom-color", hex);

  return (
    <>
      <div className="App">
        {/* LEFT PANEL */}

        <div className="left-panel">
          <div className="app-logo">
            <a
              href={window.location.href}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <img src="/FortShelves_logo.svg" width="225" alt="FortShelves" />
            </a>

            {/* This is the div that you want to conditionally render */}
            {isHovered && (
              <div className="animation">
                <span className="animate-text">Fortify your reading</span>
                <div className="cursor">|</div>
              </div>
            )}
          </div>

          <div className="left-panel-user">
            <hr />
            <CurrentlyReading />
            <hr />
            <UserCard userName="Alberto del Real" userNick="RedSantar" />
          </div>
        </div>

        {/* CENTER PANEL */}

        <div className="center-panel">
          <PostFeed />
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          <TrendingPanel />
          <hr />
          <LectureClubPanel />
          <hr />

          <div className="custom-color">
            <button className="button-app" onClick={showColorWheel}>
              <img src="/Color_circle_RGB.svg" width="30" alt="Color wheel" />
              Set custom color
            </button>

            {/* Conditional rendering */}
            {isWheelVisible && (
              <div className="color-wheel">
                <Wheel
                  width={165}
                  height={165}
                  color={hex}
                  onChange={(color) => {
                    setHex(color.hex);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
