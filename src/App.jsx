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
        <div className="left-panel">
          <div className="app-logo">
            <img src="/FortShelves_logo.svg" width="225" alt="FortShelves" />
          </div>
          <hr />
          <CurrentlyReading />
          <hr />
          <UserCard userName="Alberto del Real" userNick="RedSantar" />
        </div>

        <div className="center-panel">
          <PostFeed />
        </div>

        <div className="right-panel">
          <TrendingPanel />
          <hr />
          <LectureClubPanel />
        </div>
      </div>
    </>
  );
}
