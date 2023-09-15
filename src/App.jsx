import "./App.css";
import { useState } from "react";
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

  const [hex, setHex] = useState("#fff");

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
              <div class="animation">
                <span class="animate-text">Fortify your reading</span>
                <div class="cursor">|</div>
              </div>
            )}
          </div>
          <hr />
          <CurrentlyReading />
          <hr />
          <UserCard userName="Alberto del Real" userNick="RedSantar" />
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

          <button className="button-app">
            <img src="/Color_circle_RGB.svg" width="30" alt="Color wheel" />
            Set custom color
          </button>

          {/* <div className="color-wheel">
            <Wheel
              color={hex}
              onChange={(color) => {
                setHex(color.hex);
              }}
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
