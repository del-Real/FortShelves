export function LectureClubCard({ clubName }) {
  return (
    <div className="book-progress-card">
      {/* <img className="book-progress-cover" alt="Book cover" src={bookCover} /> */}
      <div className="book-progress-info">
        <a className="book-progress-title">{clubName}</a>
        <span className="book-progress-author">Members</span>
      </div>
    </div>
  );
}
