import ProgressBar from "@ramonak/react-progress-bar";

export function LectureClubCard({ clubName, bookProgression = 0 }) {
  return (
    <div className="book-progress-card">
      {/* <img className="book-progress-cover" alt="Book cover" src={bookCover} /> */}
      <div className="book-progress-info">
        <a className="book-progress-title">{clubName}</a>
        <span className="book-progress-author">Members</span>
        <ProgressBar completed={bookProgression} maxCompleted={100} />
      </div>
    </div>
  );
}
