export function LectureClubCard({ clubName, imagePath, color }) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const cardStyle = {
    "--card-color": color,
  };

  return (
    <div className="lecture-club-card" style={cardStyle}>
      <img className="book-progress-cover" alt="Book cover" src={imagePath} />
      <div className="book-progress-info">
        <a className="book-progress-title">{clubName}</a>
        <span className="book-progress-author">
          {getRandomInt(500)} Members
        </span>
      </div>
    </div>
  );
}
