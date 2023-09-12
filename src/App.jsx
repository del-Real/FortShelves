import "./App.css";
import { CurrentlyReading } from "./components/CurrentlyReading/CurrentlyReadingPanel";
import { UserCard } from "./components/User/UserCard";
import { PostFeed } from "./components/Post/PostFeed";
import { TrendingPanel } from "./components/Trending/TrendingPanel";
import { LectureClubPanel } from "./components/LectureClub/LectureClubPanel";

export function App() {
  return (
    <>
      <div className="App">
        {/* LEFT PANEL */}

        <div className="left-panel">
          <div className="app-logo">
            <img src="/FortShelves_logo.svg" width="225" alt="FortShelves" />
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
        </div>
      </div>
    </>
  );
}
